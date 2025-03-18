const fs = require("fs");

const path = require("path");

const express = require("express");

const uuid = require("uuid");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/restaurants", function (req, res) {
  const filePath = path.join(__dirname, "databases", "restaurants.json");
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:rid", function (req, res) {
  const restaurantId = req.params.rid;
  res.render("restaurant-detail", { randomRestaurant: restaurantId });
  // console.log(typeof restaurantId);
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.post("/new-restaurant", function (req, res) {
  const newRestaurant = req.body;
  newRestaurant.id = uuid.v4();

  const filePath = path.join(__dirname, "databases", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(newRestaurant);
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect("/confirm");
});

app.listen(3000);
