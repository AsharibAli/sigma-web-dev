// let obj = {
//   a: 1,
//   b: "asharib",
// };

// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object created and he is a lion ....");
  }
  eats() {
    console.log("Kah raha hoo");
  }
  jumps() {
    console.log("kood raha hoo");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Lion is created that is a object");
  }
  eats() {
    super.jumps();
    console.log("Kah raha hoo roar");
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Sheru");
console.log(l);
