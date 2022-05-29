import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Circuit = sequelize.define(
    "circuits",
    {
      circuit_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      circuit_ref: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      lat: {
        type: DataTypes.DOUBLE,
      },
      lng: {
        type: DataTypes.DOUBLE,
      },
      alt: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.TEXT,
      },
      timezone: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Circuit;
};
