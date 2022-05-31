import { DataTypes } from "sequelize";

export default (sequelize) => {
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
      modelName: "races",
    }
  );
  return Races;
};
