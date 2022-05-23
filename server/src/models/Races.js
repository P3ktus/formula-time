import { DataTypes } from "sequelize";
import sequelize from "./initOrm";
import Circuit from "./Circuits";

const Races = sequelize.define(
  "races",
  {
    race_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    round: {
      type: DataTypes.INTEGER,
    },
    circuit_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Circuit,
        key: "circuit_id",
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.TEXT,
    },
    datetime: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

export default Races;
