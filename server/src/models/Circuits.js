import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Circuit = sequelize.define(
    "circuits",
    {
      circuitId: {
        type: DataTypes.BIGINT,
      },
      circuitRef: {
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
    },
    {}
  );

  return Circuit;
};
