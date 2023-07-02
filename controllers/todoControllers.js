const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  const userId = req.user.id;
  try {
    const todos = await Todo.findAll({ where: { userId } });
    return res.json(todos);
  } catch (err) {
    console.log(err);
    return "Error";
  }
};

exports.createTodo = async (req, res) => {
  console.log(req.user);
  try {
    const newTodo = new Todo({
      userId: req.user.id,
      task: req.body.task,
    });

    newTodo.save();
    return res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    return "Something went wrong";
  }
};

exports.toggleTodo = async (req, res) => {
  const { id } = req.params;
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
