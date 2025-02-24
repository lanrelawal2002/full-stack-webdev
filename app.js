const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<p>" + new Date().toISOString() + "</p>");
});

app.get("/", function (req, res) {
  res.send(
    "<form action='/store-user' method='POST'><label for='express'>Your Name</label><input id='express' type='text' name='username' /><button type='submit'>Submit Form</button></form>"
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);

  const existingUsers = JSON.parse(fileData);

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send(
    "<h1 style='color: grey; font-size: 1.5rem;'>Name submission is successful!</h1>"
  );
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);

  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);
