const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());

const todoRoute = require("./routes/todoRoute");
app.use("/api", todoRoute);

const db = () =>
  mongoose
    .connect("mongodb+srv://thanushbabu2209:qwerty1234567890@cluster0.aftu3qi.mongodb.net/todo-mern")
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

db();

app.listen(3000, () => console.log("Server started on port 3000"));
