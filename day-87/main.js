const { error } = require("console");
const fs = require("fs");

console.log("starting");
// fs.writeFileSync("harry.txt", "harry is a good developer");
fs.writeFile("hello.txt", "hello world!!", () => {
  console.log("done");
  fs.readFile("hello.txt", (error, data) => {
    console.log(error, data.toString());
  });
});
fs.appendFile("harry.txt", "asharib", (e, d) => {
  console.log(d);
});
console.log("ending");
