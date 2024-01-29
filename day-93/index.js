// You have to write a Node.js program to clear
// clutter inside of a directory and organize the content of that directory into different
// folders

// for example, these files becomes:

// 1. name.jpg
// 2. name.png
// 3. name.pdf
// 4. name.zip
// 5. cat.jpg

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "F:\\Sigma-Dev\\day-93";

let files = await fs.readdir(basepath);
console.log(files);

let extensions = [];

for (const item of files) {
  console.log("running for item", item);
  let ext = item.split(".")[item.split(".").length - 1];
  console.log(ext);
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basepath, ext))) {
      // move the file to this directory its it not a js or not a json file
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    } else {
      fs.mkdir(ext);
    }
  }
}
