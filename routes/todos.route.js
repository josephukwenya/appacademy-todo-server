const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.controllers');

// Middleware to authenticate the user
router.use(authMiddleware);

// Get all todos
router.get('/', getTodos);

// Create a new todo
router.post('/', createTodo);

// Update a todo
router.put('/:id', updateTodo);

// Delete a todo
router.delete('/:id', deleteTodo);

module.exports = router;
