const express = require("express");
const {
  getAllTodo,
  getTodoById,
  createTodo,
  deleteTodo,
  editTodo,
} = require("../controllers/todo.controller");

const verifyToken = require("../middleware/auth");
const route = express.Router();

route.get("/", getAllTodo);
route.get("/:id", verifyToken, getTodoById);
route.post("/", createTodo);
route.delete("/:id", deleteTodo);
route.put("/:id", editTodo);

module.exports = route;
