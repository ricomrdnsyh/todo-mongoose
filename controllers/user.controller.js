const User = require("../models/user");
const Todo = require("../models/todo");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find();

    res.status(200).json({
      message: "success get all users",
      users,
    });
  },

  getUserById: async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);

    res.status(200).json({
      message: "success get user by id",
      user,
    });
  },

  getUserTodos: async (req, res) => {
    const { id } = req.params;

    const todos = await Todo.find({ _userId: id });

    res.json(todos);
  },

  createUser: async (req, res) => {
    let data = req.body;

    await User.create(data);

    res.status(201).json({
      message: "success create user",
      data,
    });
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);

    res.status(200).json({
      message: "success delete user",
    });
  },

  editUser: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await User.findByIdAndUpdate(id, data);

    res.status(200).json({
      message: "success edit user",
    });
  },
};
