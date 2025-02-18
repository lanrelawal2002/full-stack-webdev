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
  console.log("The username is", userName);
  console.log(req.body);
  res.send(
    "<h1 style='color: green; font-style: italic;'>Your name was successfully submitted!</h1>"
  );
});

app.listen(3000);
