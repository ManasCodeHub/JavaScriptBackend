// require('dotenv').config()
// console.log(process.env);
const express = require("express"); // here the express getting imported, this is a different way of importing in JS 
const app = express();
const port = 5000;

app.get("/", (req, res) => { //this is call back
  res.render("index")
});

app.get("/login", (req, res) => { //this is call back
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log(`Example app listening on port ${port}`);
});
