const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUser = async (userData) => {
  return await prisma.user.create({
    data: userData,
  });
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
};

// const Sequelize = require("sequelize");
// const db = require("../config/db");
// require("dotenv").config();

// const User = db.define("User", {
//   fullname: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true,
//     },
//   },
//   password: {
//     type: Sequelize.STRING,
//   },
// });

// User.sync().then(() => {
//   console.log("User table created");
// });

// module.exports = User;
