const express = require("express");

const app = express();

app.get("/currenttime", function (req, res) {
  res.send("<p>" + new Date().toISOString() + "</p>");
});

app.get("/", function (req, res) {
  res.send("<p>Hello World!</p>");
});

app.listen(3000);
