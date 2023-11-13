const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  todo: String,
  isDone: Boolean,
  _userId: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
