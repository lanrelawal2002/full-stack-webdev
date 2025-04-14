const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).redirect("/posts");
});

router.get("/posts", function (req, res) {
  res.status(200).render("posts-list");
});

router.get("/new-post", async function (req, res) {
  const result = await db.query("SELECT * FROM blog.authors");
  //   console.log(result);
  //   console.log(typeof result);
  const [authors] = result;
  //   const [authors] = await db.query("SELECT * FROM blog.authors");
  //   console.log(authors);
  //   console.log(typeof authors);
  res.status(200).render("create-post", { allAuthors: authors });
});

module.exports = router;
