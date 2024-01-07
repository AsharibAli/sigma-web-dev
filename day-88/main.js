const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static("files"));

app.get("/", (req, res) => {
  res.send("Hello World2");
});

app.get("/about", (req, res) => {
  res.send("Hello about");
});

app.get("/blog/:slug", (req, res) => {
  console.log(req);
  console.log(req.query);

  res.send(`Hello ${req.params.slug} `);
});

// app.get("/blog/intro-to-python", (req, res) => {
//   res.send("Hello python!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
