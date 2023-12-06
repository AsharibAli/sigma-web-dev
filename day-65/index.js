// Function to calculate factorial using reduce
function calculateFactorialWithReduce(number) {
  // Create an array of numbers from 1 to the given number
  const numbers = Array.from({ length: number }, (_, index) => index + 1);

  // Use reduce to multiply all the numbers in the array
  const factorial = numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );

  // Return the factorial
  return factorial;
}

const number = 15;
const factorialWithReduce = calculateFactorialWithReduce(number);

// Print the results
console.log(`Factorial of ${number} using reduce: ${factorialWithReduce}`);

// #############################################

// Function to calculate factorial using for loop
function calculateFactorialWithForLoop(number) {
  // Initialize the factorial to 1
  let factorial = 1;

  // Iterate from 1 to the given number
  for (let i = 1; i <= number; i++) {
    // Multiply the factorial by the current number
    factorial *= i;
  }
  return factorial;
}

// Test the functions
const number2 = 15;
const FactorialWithForLoop = calculateFactorialWithForLoop(number2);

// Print the results
console.log(`Factorial of ${number2} using for loop: ${FactorialWithForLoop}`);
