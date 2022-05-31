import { Op } from "sequelize";
import {
  Races,
  Results,
  Circuits,
  Sessions,
  Drivers,
  CarConstructor,
} from "../models/index";
import { pick } from "lodash";

export const getEvent = [
  async (req, res) => {
    const race_id = req.query.race_id;

    let event;
    if (race_id != null) {
      event = await buildEvent(race_id);
    } else {
      event = await getCurrentEvent();
    }
    console.log("Got Event");
    const results = await getRaceResults(event.race_id);
    console.log("Got Results");

    res.json({
      event,
      results,
    });
  },
];

export const getCalendar = [
  async (req, res) => {
    const from = new Date();
    from.setDate(0);
    from.setMonth(0);
    const to = new Date(from.getTime());
    to.setFullYear(from.getFullYear() + 1);

    const currentEvent = await getCurrentEvent();

    const races = await Races.findAll({
      where: { datetime: { [Op.between]: [from, to] } },
    });

    const currentEventIndex = races.findIndex(
      (race) => race.race_id === currentEvent.race_id
    );

    res.json({ calendar: races, currentEventIndex });
  },
];

const getCurrentEvent = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const race = await Races.findOne({
    where: { datetime: { [Op.gt]: today } },
    order: [["datetime", "ASC"]],
    limit: 1,
  });
  return buildEvent(race.race_id);
};

const getRaceResults = async (race_id) => {
  return Results.findAll({
    where: { race_id: { [Op.eq]: race_id } },
    include: [Drivers, CarConstructor],
  });
};

const buildEvent = async (race_id) => {
  const race = await Races.findOne({
    where: { race_id: { [Op.eq]: race_id } },
    include: [Circuits],
  });
  const sessions = await Sessions.findAll({
    where: { race_id: { [Op.eq]: race_id } },
    order: [["datetime", "ASC"]],
  });
  const schedule = [
    ...sessions,
    { race_id: race.race_id, name: "Gara", datetime: race.datetime },
  ];

  const event = {
    ...pick(race, [
      "race_id",
      "year",
      "round",
      "name",
      "date",
      "time",
      "url",
      "datetime",
      "circuit",
    ]),
    schedule,
  };
  return event;
};
