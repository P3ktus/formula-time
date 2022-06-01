import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Donations = sequelize.define(
    "donations",
    {
      donation_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      msg: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: true,
    }
  );
  return Donations;
};
