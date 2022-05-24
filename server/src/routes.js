import { Router } from "express";
import * as Events from "./controllers/Events";

const router = Router();

router.get("/event", Events.getEvent);

router.get("/calendar", Events.getCalendar);

export default router;

//COMMENTS
