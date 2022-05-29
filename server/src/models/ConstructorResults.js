import { DataTypes } from "sequelize";

export default (sequelize) => {
  const ConstructorResult = sequelize.define(
    "constructor_results",
    {
      constructor_results_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      points: {
        type: DataTypes.DOUBLE,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return ConstructorResult;
};
