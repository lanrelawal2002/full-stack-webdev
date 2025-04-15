const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
  const postQuery = `SELECT posts.title, posts.summary, authors.name FROM blog.posts 
  INNER JOIN authors ON posts.author_id = authors.id`;
  const result = await db.query(postQuery);
  const [selectedPosts] = result;
  res.status(200).render("posts-list", { usefulPosts: selectedPosts });
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

router.post("/new-entry", async function (req, res) {
  const formEntries = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];

  await db.query(
    "INSERT INTO blog.posts (title, summary, body, author_id) VALUES (?)",
    [formEntries]
  );

  res.redirect("/posts");
});

module.exports = router;
