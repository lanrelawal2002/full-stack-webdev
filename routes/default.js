const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).render("index");
});

router.get("/about", function (req, res) {
  res.status(200).render("about");
});

module.exports = router;
