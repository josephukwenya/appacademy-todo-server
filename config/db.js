const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

console.log('Initializing Prisma Client...');
const prisma = new PrismaClient();

(async () => {
  try {
    await prisma.$connect();
    console.log('Connected to the database successfully.');
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }
})();

module.exports = prisma;

// const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",
//   }
// );

// (async () => {
//   try {
//     await sequelize.authenticate();
//   } catch (error) {
//     console.error("Unable to connect to database: ", error);
//   }
// })();

// module.exports = sequelize;
