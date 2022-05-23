import { DataTypes } from "sequelize";
import sequelize from "./initOrm";

const Constructor = sequelize.define(
  "constructors",
  {
    constructor_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    constructor_ref: {
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

export default Constructor;
