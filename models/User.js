const Sequelize = require("sequelize");
const db = require("../config/db");
require("dotenv").config();

const User = db.define("User", {
  fullname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
});

User.sync().then(() => {
  console.log("User table created");
});

module.exports = User;
