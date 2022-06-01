import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { sequelize } from "./models";
import GenericRouter from "./routes";
import path from "path";

const PORT = 8000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", GenericRouter);

app.use("/assets", express.static(path.join(__dirname,  "assets")));

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
