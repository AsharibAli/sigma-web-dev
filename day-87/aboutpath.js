import path from "path";
let myPath = "NSC@Asharib MINGW64 //g//Sigma-Dev//day-87//harry.txt";
console.log(path.extname(myPath));

console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(
  path.join("NSC@Asharib MINGW64 //g//Sigma-Dev//day-87//", "harry.txt")
);
