const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
};

exports.createTodo = async (req, res) => {
  const todo = new Todo({
    task: req.body.task,
  });

  todo.save();
  res.status(201).json({ todo });
};

exports.toggleTodo = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findOne({ where: { id } });

  todo.complete = !todo.complete;

  todo.save();

  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.destroy({ where: { id } });

  res.status(204).json(todo);
};
