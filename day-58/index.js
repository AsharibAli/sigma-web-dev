function nice(name) {
  console.log("Hey " + name + "you're loving");
  console.log("Hey " + name + "thanks bro");
}

function sum(a, b, c = 3) {
  //   console.log(a + b);
  console.log(a, b, c);
  return a + b + c;
}

result = sum(3, 2);
result2 = sum(10, 5);
result3 = sum(20, 5);

console.log("The sum of this number is: ", result);
console.log("The sum of this number is: ", result2);
console.log("The sum of this number is: ", result3);

const func1 = (x) => {
  console.log("I am a arrow function", x);
};

func1(34);
func1(66);
func1(84);
