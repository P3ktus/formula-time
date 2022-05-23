import { DataTypes } from "sequelize";
import sequelize from "./initOrm";
import Race from "./Races";
import Driver from "./Drivers";

const DriverStanding = sequelize.define(
  "driver_standings",
  {
    driver_standings_id: {
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
    points: {
      type: DataTypes.DOUBLE,
    },
    position: {
      type: DataTypes.INTEGER,
    },
    position_text: {
      type: DataTypes.STRING,
    },
    wins: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default DriverStanding;
