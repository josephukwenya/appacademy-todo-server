const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({ where: { UserId: req.userId } });
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.createTodo = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    // Create the todo
    const todo = await Todo.create({ title, description, dueDate, UserId: req.userId });

    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.updateTodo = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const { id } = req.params;

    // Find the todo
    const todo = await Todo.findOne({ where: { id, UserId: req.userId } });
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Update the todo
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    await todo.save();

    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the todo
    const todo = await Todo.findOne({ where: { id, UserId: req.userId } });
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Delete the todo
    await todo.destroy();

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}