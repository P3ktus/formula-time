import { DataTypes } from "sequelize";
import sequelize from "./initOrm";
import Race from "./Races";
import Constructor from "./Constructors";

const ConstructorResult = sequelize.define(
  "constructor_results",
  {
    constructor_results_id: {
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
    constructor_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Constructor,
        key: "constructor_id",
      },
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

export default ConstructorResult;
