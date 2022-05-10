import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { sequelize } from "./models";
import GenericRouter from "./routes";

const PORT = 8000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", GenericRouter);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
