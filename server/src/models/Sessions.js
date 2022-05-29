import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Session = sequelize.define(
    "sessions",
    {
      session_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      datetime: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );
  return Session;
};
