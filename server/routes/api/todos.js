const express = require("express");
const uuid = require("uuid");
const todos = require("../../Todos");
const router = express.Router();

// GET all todos
router.get("/", (req, res) => {
  res.json(todos);
});

// GET a single todo
router.get("/:id", (req, res) => {
  const isFound = todos.some((todo) => todo.id === parseInt(req.params.id));
  if (isFound) {
    res.json(todos.filter((todo) => todo.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ message: `no todo with id of ${req.params.id} was found` });
  }
});

// CREATE one todo
router.post("/", (req, res) => {
  const newTodo = {
    id: uuid.v4(),
    title: req.body.title,
    completed: false,
  };
  if (!newTodo.title) {
    return res.status(400).json({ message: "please include a title" });
  }

  todos.push(newTodo);
  res.json(todos);
});

module.exports = router;
