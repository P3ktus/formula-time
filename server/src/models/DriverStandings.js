import { DataTypes } from "sequelize";

export default (sequelize) => {
  const DriverStanding = sequelize.define(
    "driver_standings",
    {
      driver_standings_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
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
  return DriverStanding;
};
