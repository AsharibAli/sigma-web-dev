const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  const timestamp = Date.now();
  const date = new Date(timestamp).toLocaleDateString();
  console.log("Time: ", date);
  next();
});
// define the home page route
router.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
