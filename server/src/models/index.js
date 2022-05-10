import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
const db = {};

const config = {
  port: 8000,
  db: {
    database: "formula-time",
    user: "user",
    password: "pwd",
    options: {
      dialect: "sqlite",
      host: "localhost",
      storage: path.resolve(__dirname, "../../db.sqlite"),
    },
  },
};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
