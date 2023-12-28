let a = prompt("Enter first number");

let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Not a number");
}
let sum = parseInt(a) + parseInt(b);
function main() {
  let x = 5;

  try {
    console.log("the sum is ", sum * x);
    return true;
  } catch (error) {
    return false;
    console.log("Error a gaya bhai!");
  } finally {
    console.log("files are being closed and db is being disconnected");
  }
}
let c = main();
