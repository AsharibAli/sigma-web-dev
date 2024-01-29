const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/Employess.js");

mongoose.connect("mongodb://127.0.0.1:27017/company");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  await Employee.deleteMany({});

  let randomName = ["Ali", "Shahnoor", "Samad", "Ayan"];
  let randomLang = ["Python", "JavaScript", "C++", "C#"];
  let randomCity = ["Lahore", "Islamabad", "Peshawar", "Nawabshah"];

  // Generate a random data here
  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomName),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      City: getRandom(randomCity),
      isManager: Math.random() > 0.5 ? true : false,
    });
    console.log(e);
    // await e.save();
  }
  res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
