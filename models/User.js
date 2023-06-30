const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = db.define("User", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  fullname: {
    type: Sequelize.STRING,
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
  // console.log('User table created');
});

User.prototype.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// User.prototype.matchPassword = async function(enteredPassword){
//   return await bcrypt.compare(enteredPassword, this.password);
// }

// User.prototype.generateAuthToken = function(){
//   const token = jwt.sign({
//     id: this.id,
//     email: this.email
//   }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES
//   })
//   return token;
// }

module.exports = User;
