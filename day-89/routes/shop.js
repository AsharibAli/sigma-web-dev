const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("Shop home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About Shop");
});

// define the about route
router.get("/about/another-page", (req, res) => {
  res.send("Another Shop Page");
});

// define the about route
router.get("/about/shop-details", (req, res) => {
  res.send("Our ShoP details");
});

// define the about route
router.get("/about/shop-details/1", (req, res) => {
  res.send("Our ShoP details dUKAN 1 ");
});

module.exports = router;
