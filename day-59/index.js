/* Create a faulty calculator using JavaScript.
This faulty calculator does following:
1. It takes two number as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It perfoms wrong operations 10% of the times.


*/
function faultyCalculator(num1, num2) {
  const operators = ["+", "-", "*", "/"];
  const randomOperator =
    operators[Math.floor(Math.random() * operators.length)];

  if (Math.random() < 0.1) {
    switch (randomOperator) {
      case "+":
        return num1 - num2;
      case "*":
        return num1 + num2;
      case "-":
        return num1 / num2;
      case "/":
        return num1 ** num2;
    }
  }

  switch (randomOperator) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
  }
}

// Testing the faultyCalculator function
const num1 = 10;
const num2 = 5;
const result = faultyCalculator(num1, num2);
console.log(`Result: ${result}`);
