const Todo = require("../models/todo.model");

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  const newTodo = new Todo({ title, description });
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};
