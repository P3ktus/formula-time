import { Op } from "sequelize";
import { Donations } from "../models";

export const createDonationIntent = [
  async (req, res) => {
    try {
      const { amount, name, lastName, email, phone, msg } = req.body;

      const donation = await Donations.create({
        amount,
        name,
        lastName,
        email,
        phone,
        msg,
      });

      res.json(donation);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: true });
    }
  },
];

export const getDonations = [
  async (req, res) => {
    const donations = await Donations.findAll({ order: [["amount", "DESC"]] });
    res.json(donations);
  },
];
