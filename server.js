const express = require("express");
const app = express();
const port = 3000;


//setting the view engine
app.set('view engine', 'ejs'); 

app.get("/", (req, res) => {
  res.render("todos")
});


app.get("/contact-us", (req, res) => {
  res.send("contact us page");
});


app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
