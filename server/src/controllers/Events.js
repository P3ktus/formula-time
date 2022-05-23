import {} from "express-validator";
import Races from "../models/Races";

export const getNextEvent = [(req, res) => {}];

export const getCalendar = [
  (req, res) => {
    const from = new Date();
    from.setDate(0);
    from.setMonth(0);
    const to = new Date(from.getTime());
    to.setFullYear(from.getFullYear() + 1);

    console.log("Getting from-to", from, to);
  },
];
