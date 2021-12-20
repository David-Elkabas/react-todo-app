const express = require("express");
const uuid = require("uuid");
// const todos = require("../../Todos");
const router = express.Router();
const Todo = require("../../models/Todo");

// GET all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET a single todo
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.json({ message: error });
  }
});

// CREATE one todo
router.post("/", async (req, res) => {
  const newTodo = new Todo({
    // id: uuid.v4(), //create a random id
    title: req.body.title,
    completed: false,
  });
  if (!newTodo.title) {
    return res.status(400).json({ message: "please include a title" });
  }
  try {
    const saveTodo = await newTodo.save();
    res.json(saveTodo);
  } catch (error) {
    res.json({ message: error });
  }
  // todos.push(newTodo);
  // res.json(todos);
});

// UPDATE one todo
router.patch("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title, completed: req.body.completed } }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

// DELETE a single todo
// GET a single todo
router.delete("/:id", async (req, res) => {
  try {
    const removedTodo = await Todo.remove({ _id: req.params.id });
    res.json(removedTodo);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
