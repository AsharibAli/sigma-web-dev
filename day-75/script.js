console.log("Ash is hacker!");
console.log("xyz is hecker!");

setTimeout(() => {
  console.log("I'm inside the settimeout function");
}, 2000);

setTimeout(() => {
  console.log("I'm inside the settimeout function 2");
}, 2000);

console.log("The end");

const fn = () => {
  console.log("nothing");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};
const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Asharib", fn);
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
