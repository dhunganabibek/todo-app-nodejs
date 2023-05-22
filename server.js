const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

//mongodb connection url
const connectionUrl =
  "mongodb+srv://dhunganabibek2016:RisinG123%40@cluster0.5rgpgmm.mongodb.net/todo-app?retryWrites=true&w=majority";

//connecting to the database
mongoose.connect(connectionUrl);

//defining the scheme
const Todo = new mongoose.model("todos", { name: String });

//setting the view engine
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  await Todo.create({ name: "test" });
  res.render("todos");
});

app.get("/contact-us", (req, res) => {
  res.send("contact us page");
});

app.get("/test", (req, res) => {
  res.send("ADD button clicked");
});

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
