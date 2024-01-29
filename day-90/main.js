const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const birds = require("./routes/birds");

app.use("/birds", birds);

app.use(express.static("public"));

// Middleware 1
app.use((req, res, next) => {
  //   console.log(req.headers);
  req.harry = "I'm harry potter";

  const timestamp = Date.now();
  const date = new Date(timestamp).toLocaleDateString();
  fs.appendFileSync("logs.txt", `${date} is a ${req.method}\n`);
  console.log(`${date} is a ${req.method}`);
  //   res.send("hacked by middleware 1");
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("this is seconds middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!" + req.harry);
});

app.get("/about", (req, res) => {
  res.send("Hello about!");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
