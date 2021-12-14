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
    id: uuid.v4(), //create a random id
    title: req.body.title,
    completed: false,
  };
  if (!newTodo.title) {
    return res.status(400).json({ message: "please include a title" });
  }
  todos.push(newTodo);
  res.json(todos);
});

// UPDATE one todo
router.put("/:id", (req, res) => {
  const isFound = todos.some((todo) => todo.id === parseInt(req.params.id));
  if (isFound) {
    const updateTodo = req.body;
    todos.forEach((todo) => {
      if (todo.id === parseInt(req.params.id)) {
        todo.title = updateTodo.title ? updateTodo.title : todo.title;
        todo.completed = updateTodo.completed
          ? updateTodo.completed
          : todo.completed;
        res.json({ message: "todo updated", todo });
      }
    });
  } else {
    res
      .status(400)
      .json({ message: `no todo with id of ${req.params.id} was found` });
  }
});

// DELETE a single todo
router.delete("/:id", (req, res) => {
  const isFound = todos.some((todo) => todo.id === parseInt(req.params.id));
  if (isFound) {
    newTodos = todos.filter((todo) => todo.id !== parseInt(req.params.id));
    res.json({ message: "todo deleted", todos: newTodos });
  } else {
    res
      .status(400)
      .json({ message: `no todo with id of ${req.params.id} was found` });
  }
});

module.exports = router;
