const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTodo = async (todoData) => {
  return await prisma.todo.create({
    data: todoData,
  });
};

const getTodoById = async (id) => {
  return await prisma.todo.findUnique({
    where: { id },
  });
};

const getAllTodos = async () => {
  return await prisma.todo.findMany();
};

module.exports = {
  createTodo,
  getTodoById,
  getAllTodos,
};

// const { Sequelize, DataTypes } = require("sequelize");
// const db = require("../config/db");

// const Todo = db.define("Todo", {
//   id: {
//     type: Sequelize.UUID,
//     defaultValue: Sequelize.UUIDV4,
//     primaryKey: true,
//   },
//   userId: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     foreignKey: true,
//   },
//   task: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   complete: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
// });

// Todo.sync().then(() => {
//   // console.log('table created');
// });
// module.exports = Todo;
