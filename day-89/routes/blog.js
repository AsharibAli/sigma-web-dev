const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Blog home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About blogs");
});

// define the about post route
router.get("/blog-post/:slug", (req, res) => {
  res.send(`Fetch the blog post${req.params.slug}`);
});

module.exports = router;
