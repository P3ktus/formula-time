import {} from "express-validator";
import Races from "../models/Races";
import Results from "../models/Results";
import { Op } from "sequelize";

export const getEvent = [
  async (req, res) => {
    const race_id = req.query.race_id;

    let event;
    if (race_id != null) {
      event = await Races.findOne({
        where: {
          race_id: {
            [Op.eq]: race_id,
          },
        },
      });
    } else {
      event = await getCurrentEvent();
    }

    const results = await getRaceResults(event.race_id);

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

    console.log(currentEvent);

    const races = await Races.findAll({
      where: {
        datetime: {
          [Op.between]: [from, to],
        },
      },
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
  return Races.findOne({
    where: {
      datetime: {
        [Op.gt]: today,
      },
    },
    order: [["datetime", "ASC"]],
    limit: 1,
  });
};

const getRaceResults = async (race_id) => {
  return Results.findAll({
    where: {
      race_id: {
        [Op.eq]: race_id,
      },
    },
  });
};
