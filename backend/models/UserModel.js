import { DataTypes } from "sequelize";
import db from "../config/Databases.js";

const User = db.define(
  "users",
  {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { freezeTableName: true }
);

export default User;

(async () => {
  await db.sync();
})();
