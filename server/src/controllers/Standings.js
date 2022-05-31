import { Op } from "sequelize";
import {
  Races,
  DriverStandings,
  Drivers,
  CarConstructor,
  ConstructorStandings,
  Results,
} from "../models/index";

export const getStandings = [
  async (req, res) => {
    try {
      const seasonFrom = new Date();
      seasonFrom.setDate(0);
      seasonFrom.setMonth(0);
      const seasonTo = new Date(seasonFrom.getTime());
      seasonTo.setFullYear(seasonFrom.getFullYear() + 1);

      const lastResult = await Results.findOne({
        where: {
          "$race.datetime$": {
            [Op.gte]: seasonFrom,
            [Op.lte]: seasonTo,
          },
        },
        order: [[Races, "datetime", "DESC"]],
        include: [
          {
            model: Races,
            require: true,
          },
        ],
        limit: 1,
      });

      console.log(lastResult.race_id);

      const constructorStandings = await ConstructorStandings.findAll({
        where: { race_id: { [Op.eq]: lastResult.race_id } },
        include: [CarConstructor],
        order: [["position", "ASC"]],
      });

      const driverStandings = await DriverStandings.findAll({
        where: { race_id: { [Op.eq]: lastResult.race_id } },
        include: [Drivers],
        order: [["position", "ASC"]],
      });

      res.json({
        lastResult,
        constructorStandings,
        driverStandings,
      });
    } catch (error) {
      console.log(error);
      res.json({ error: true });
    }
  },
];
