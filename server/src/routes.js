import { Router } from "express";

const router = Router();

router.get("/getNextEvent", async (req, res) => {
  const startDate = new Date();
  const endDate = new Date().setDate(startDate.getDate() + 1);
  res.json({
    name: "Gran Premio di America",
    date: new Date(),
    timezone: "America/New_York",
    sessioni: [
      {
        nome: "F_1",
        date: new Date(),
        timezone: "America/New_York",
      },
      {
        nome: "F_2",
        date: new Date(),
        timezone: "America/New_York",
      },
      {
        nome: "F_3",
        date: new Date(),
        timezone: "America/New_York",
      },
    ],
  });
});

export default router;

//COMMENTS
