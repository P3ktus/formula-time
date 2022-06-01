import { Op } from "sequelize";
import { Drivers } from "../models/index";

export const getDrivers = [
  async (req, res) => {
    try {
      res.json(await Drivers.findAll({ order: [["bio", "ASC"]] }));
    } catch (error) {
      console.log(error);
    }
  },
];

export const getDriver = [
  async (req, res) => {
    const { driver_id } = req.params;
    res.json(
      await Drivers.findOne({ where: { driver_id: { [Op.eq]: driver_id } } })
    );
  },
];
