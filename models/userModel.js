import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";

const userModel = async () => {
  const sequelize = await connection();
  console.log(sequelize, "sequelize");
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, unique: true, autoIncrement: true },
    full_name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
  });
  return User;
};
export default userModel;
