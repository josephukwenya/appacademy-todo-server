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

router.route('/')
  .get(getTodos)
  .post(createTodo);

router.route('/:id')
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;
