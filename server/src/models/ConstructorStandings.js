import { DataTypes } from "sequelize";
import sequelize from "./initOrm";
import Race from "./Races";
import Constructor from "./Constructors";

const ConstructorStanding = sequelize.define(
  "constructor_standings",
  {
    constructor_standings_id: {
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

export default ConstructorStanding;
