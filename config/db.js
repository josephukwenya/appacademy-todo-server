const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error("Unable to connect to database: ", error);
  }
})();

module.exports = sequelize;
