const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    const user = req.user;
    const Todos = await Todo.find().populate("_userId");

    res.status(200).json({
      message: "success get all Todos",
      Todos,
    });
  },

  getTodoById: async (req, res) => {
    const id = req.params.id;
    const Todo = await Todo.findById(id).populate("_userId");

    res.status(200).json({
      message: "success get Todo by id",
      Todo,
    });
  },

  createTodo: async (req, res) => {
    let data = req.body;

    if (!data._userId) {
      return res.status(400).json({
        message: "Missing _userId",
      });
    }

    const todo = new Todo(data);
    await todo.save();

    res.status(201).json({
      message: "success create Todo",
      todo,
    });
  },

  deleteTodo: async (req, res) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);

    res.status(200).json({
      message: "success delete Todo",
    });
  },

  editTodo: async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    if (!data._userId) {
      return res.status(400).json({
        message: "Missing _userId",
      });
    }
    await Todo.findByIdAndUpdate(id, data);

    res.status(200).json({
      message: "success edit Todo",
    });
  },
};
