const express = require("express");
const app = express();
const port = 3000;
const shop = require("./routes/shop");

app.use("/shop", shop);
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("Hey its a get request");
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("Hey its a post request");
  res.send("Hello World post!");
});

app.put("/", (req, res) => {
  console.log("Hey its a PUT request");
  res.send("Hello World PUT!");
});

app.get("/index", (req, res) => {
  console.log("Hey its an index");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("Hey its an index");
  res.json({
    name: "john",
    age: 30,
    age2: 12,
    b: 12,
    c: 14,
    name2: ["harry", "asharb"],
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
