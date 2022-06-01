import { Router } from "express";
import * as Events from "./controllers/Events";
import * as Standings from "./controllers/Standings";
import * as Drivers from "./controllers/Drivers";
import * as Donations from "./controllers/Donations";

const router = Router();

router.get("/event", Events.getEvent);

router.get("/calendar", Events.getCalendar);

router.get("/standings", Standings.getStandings);

router.get("/seasons", Events.getSeasons);

router.get("/drivers", Drivers.getDrivers);

router.get("/drivers/:driver_id", Drivers.getDriver);

router.post("/donations", Donations.createDonationIntent);

router.get("/donations", Donations.getDonations);

export default router;

//COMMENTS
