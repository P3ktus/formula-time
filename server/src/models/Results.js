import { DataTypes } from "sequelize";
import sequelize from "./initOrm";
import Race from "./Races";
import Driver from "./Drivers";
import Constructor from "./Constructors";

const Result = sequelize.define(
  "results",
  {
    result_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    race_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Race,
        key: "race_id",
      },
    },
    driver_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Driver,
        key: "driver_id",
      },
    },
    constructor_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Constructor,
        key: "constructor_id",
      },
    },
    number: {
      type: DataTypes.STRING,
    },
    grid: {
      type: DataTypes.INTEGER,
    },
    position: {
      type: DataTypes.STRING,
    },
    position_text: {
      type: DataTypes.STRING,
    },
    position_order: {
      type: DataTypes.INTEGER,
    },
    points: {
      type: DataTypes.DOUBLE,
    },
    laps: {
      type: DataTypes.INTEGER,
    },
    time: {
      type: DataTypes.STRING,
    },
    milliseconds: {
      type: DataTypes.STRING,
    },
    fastest_lap: {
      type: DataTypes.STRING,
    },
    rank: {
      type: DataTypes.STRING,
    },
    fastest_lap_time: {
      type: DataTypes.STRING,
    },
    fastest_lap_speed: {
      type: DataTypes.STRING,
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default Result;
