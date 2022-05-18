import Sequelize from "sequelize";
import Circuits from "./Circuits";

const config = {
  port: 5432,
  db: {
    database: "formula_db",
    user: "postgres",
    password: "root",
    options: {
      dialect: "postgres",
      host: "localhost",
    },
  },
};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

export default {
  sequelize,
  //Circuits: Circuits(sequelize),
};
