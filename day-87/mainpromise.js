import fs from "fs/promises";
// const fs = require("fs/promises");

let a = await fs.readFile("hello.txt");

let b = await fs.writeFile("new.txt", "\n\n\n\n\n\n\nthis is a new file");
console.log(a.toString(), b);
