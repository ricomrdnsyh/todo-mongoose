const express = require("express");
const {
  getAllUser,
  getUserById,
  getUserTodos,
  createUser,
  deleteUser,
  editUser,
} = require("../controllers/user.controller");
const verifyToken = require("../middleware/auth");
const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/todos", verifyToken, getUserTodos);
route.post("/", createUser);
route.delete("/:id", verifyToken, deleteUser);
route.put("/:id", verifyToken, editUser);

module.exports = route;
