const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/posts");
});

// route handler to practice async ops with promises
router.get("/promise", function (req, res) {
  db.query("SELECT * FROM authors WHERE id = 2").then(function (data, error) {
    // console.log(`This comes second`);
    const [authorArray] = data;

    if (!authorArray || authorArray.length === 0) {
      return res.status(404).render("404");
    }

    res.render("promise", { authorInfo: authorArray[0] });
  });

  // console.log(`This should come first`);
});

router.get("/posts", async function (req, res) {
  const postQuery = `SELECT blog.posts.*, blog.authors.name FROM blog.posts 
  INNER JOIN authors ON posts.author_id = authors.id`;
  const result = await db.query(postQuery);
  const [selectedPosts] = result;
  const totalPosts = selectedPosts.length;
  res.status(200).render("posts-list", {
    usefulPosts: selectedPosts,
    totalPosts: totalPosts,
  });
});

router.get("/posts/:id", async function (req, res) {
  query = `SELECT posts.*, authors.name, authors.email FROM posts 
  INNER JOIN authors ON posts.author_id = authors.id
  WHERE posts.id = ?`;
  const result = await db.query(query, [req.params.id]);
  const [post] = result; // array destructring

  if (!post || post.length === 0) {
    return res.status(404).render("404");
  }

  postData = {
    ...post[0],
    date: post[0].date.toISOString(),
    humanReadableDate: post[0].date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    body: post[0].body.toUpperCase(),
  };

  res.status(200).render("post-detail", { post: postData });
});

router.get("/posts/:id/edit", async function (req, res) {
  const query = `SELECT * FROM posts WHERE id = ?`;
  const result = await db.query(query, [req.params.id]);
  const [post] = result;

  if (!post || post.length === 0) {
    return res.status(404).render("404");
  }

  res.status(200).render("update-post", { post: post[0] });
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
