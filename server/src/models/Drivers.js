import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Driver = sequelize.define(
    "drivers",
    {
      driver_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      driver_ref: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
      },
      forename: {
        type: DataTypes.STRING,
      },
      surname: {
        type: DataTypes.STRING,
      },
      dob: {
        type: DataTypes.STRING,
      },
      nationality: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.TEXT,
      },
      bio: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Driver;
};
