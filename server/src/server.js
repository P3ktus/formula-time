import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import models from "./models";
import GenericRouter from "./routes";

const PORT = 8000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", GenericRouter);

console.log(models);

models.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
