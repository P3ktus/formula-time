import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Result = sequelize.define(
    "results",
    {
      result_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
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
  return Result;
};
