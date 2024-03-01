import { Sequelize } from "sequelize";

export const userModel = (sequelize) => {
  const { Datatypes } = Sequelize;

  return sequelize.define("user", {
    id: { type: Datatypes.Integer, unique: true },
    full_name: { type: Datatypes.STRING },
    email: { type: Datatypes.STRING, unique: true },
    password: { type: Datatypes.STRING },
  });
};
