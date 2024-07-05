const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.uzbzi7b.mongodb.net/todo_app"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
