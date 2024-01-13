import { Sequelize } from "sequelize";

const db = new Sequelize("tb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
