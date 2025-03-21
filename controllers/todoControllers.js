const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getTodos = async (req, res) => {
  const userId = req.user.id;
  try {
    const todos = await prisma.todo.findMany({
      where: { userId },
    });
    return res.json(todos);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createTodo = async (req, res) => {
  console.log(req.user);
  try {
    const newTodo = await prisma.todo.create({
      data: {
        userId: req.user.id,
        task: req.body.task,
      },
    });
    return res.status(201).json(newTodo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.toggleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await prisma.todo.findUnique({
      where: { id },
    });

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete: !todo.complete },
    });

    res.json(updatedTodo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.todo.delete({
      where: { id },
    });
    res.status(204).json({ message: 'Todo deleted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
