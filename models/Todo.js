const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Todo = db.define("Todo", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  task: {
    type: Sequelize.STRING,
  },
  complete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Todo.sync().then(() => {
  // console.log('table created');
});
module.exports = Todo;
