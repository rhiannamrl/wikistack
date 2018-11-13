const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(morgan("dev")); //logging middleware;
app.use(express.static(path.join(__dirname, "./public"))); //middleware that sets up path directory
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const layout = require("./views/layout");

app.get("/", (req, res) => {
  res.send(layout("hello world"));
});

module.exports = app;
