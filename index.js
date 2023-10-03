require('dotenv').config()
const express = require("express"); // here the express getting imported, this is a different way of importing in JS 
const app = express();
const port = 3000;

app.get("/", (req, res) => { //this is call back
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/youtube", (req,res)=> {
  res.send("This is youtube");
})

app.get("/login", (req, res) => {
    res.send("<h1>Hi you can login here</h1>");
})