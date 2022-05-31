import { Router } from "express";
import * as Events from "./controllers/Events";
import * as Standings from "./controllers/Standings";

const router = Router();

router.get("/event", Events.getEvent);

router.get("/calendar", Events.getCalendar);

router.get("/standings", Standings.getStandings);

router.get("/seasons", Events.getSeasons);

export default router;

//COMMENTS
