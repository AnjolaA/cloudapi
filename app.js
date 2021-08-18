const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;
const HOST = "0.0.0.0";

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/get", function (req, res) {
  res.send("My name is Jack");
});

app.post("/create", function (req, res, next) {
  if (req.body.name != null) {
    res.send(`My name is ${req.body.name}`);
  }
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
