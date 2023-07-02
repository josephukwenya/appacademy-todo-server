const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Todo = db.define("Todo", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    foreignKey: true,
  },
  task: {
    type: Sequelize.STRING,
    allowNull: false,
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
