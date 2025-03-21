const fs = require("node:fs");
const path = require("node:path");

const express = require("express");
const uuid = require("uuid");

const restaurantPackage = require("./utilities/restaurant-info/restaurant-data");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.status(200).render("index");
});

app.get("/restaurants", function (req, res) {
  const storedRestaurants = restaurantPackage.getStoredRestaurants();

  res.status(200).render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get("/restaurants/:rid", function (req, res) {
  const restaurantId = req.params.rid;
  // console.log(typeof restaurantId);

  const storedRestaurants = restaurantPackage.getStoredRestaurants();

  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res
        .status(200)
        .render("restaurant-detail", { randomRestaurant: restaurant });
    }
  }

  res.status(404).render("404");
});

app.get("/recommend", function (req, res) {
  res.status(200).render("recommend");
});

app.get("/about", function (req, res) {
  res.status(200).render("about");
});

app.get("/confirm", function (req, res) {
  res.status(200).render("confirm");
});

app.post("/new-restaurant", function (req, res) {
  const newRestaurant = req.body;
  newRestaurant.id = uuid.v4();

  const allMyRestaurants = restaurantPackage.getStoredRestaurants();

  allMyRestaurants.push(newRestaurant);

  restaurantPackage.writeToJsonFile(allMyRestaurants);

  res.redirect("/confirm");
});

app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);
