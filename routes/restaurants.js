const express = require("express");
const router = express.Router();

const uuid = require("uuid");

const restaurantPackage = require("../utilities/restaurant-info/restaurant-data");

router.get("/restaurants", function (req, res) {
  let sortDisplay = req.query.order;

  let flipOrder = "desc";

  if (sortDisplay !== "asc" && sortDisplay !== "desc") {
    sortDisplay = "asc";
  }

  if (sortDisplay === "desc") {
    flipOrder = "asc";
  }

  const storedRestaurants = restaurantPackage.getStoredRestaurants();

  storedRestaurants.sort(function (resA, resB) {
    if (
      (sortDisplay === "asc" && resA.name > resB.name) ||
      (sortDisplay === "desc" && resB.name > resA.name)
    ) {
      return 1;
    }
    return -1;
  });

  res.status(200).render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: flipOrder,
  });
});

router.get("/restaurants/:rid", function (req, res) {
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

router.get("/recommend", function (req, res) {
  res.status(200).render("recommend");
});

router.get("/confirm", function (req, res) {
  res.status(200).render("confirm");
});

router.post("/new-restaurant", function (req, res) {
  const newRestaurant = req.body;
  newRestaurant.id = uuid.v4();

  const allMyRestaurants = restaurantPackage.getStoredRestaurants();

  allMyRestaurants.push(newRestaurant);

  restaurantPackage.writeToJsonFile(allMyRestaurants);

  res.redirect("/confirm");
});

module.exports = router;
