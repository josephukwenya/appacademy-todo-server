const express = require("express");
const {
  getTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
} = require("../controllers/todoControllers");
const auth = require("../middleware/auth");

const router = express.Router();

router.use(auth);

router.get("/", getTodos);

router.post("/new", createTodo);

router.patch("/:id/complete", toggleTodo);

router.delete("/:id/delete", deleteTodo);

module.exports = router;
