import { DataTypes } from "sequelize";

export default (sequelize) => {
  const CarConstructor = sequelize.define(
    "car_constructors",
    {
      car_constructor_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      car_constructor_ref: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      nationality: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );
  return CarConstructor;
};
