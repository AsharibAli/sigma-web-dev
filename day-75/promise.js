console.log("This is promise");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("I am rejected because no one is supporting!");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Asharib");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("I am rejected because no one is supporting 2!");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Asharib 2");
    }, 3000);
  }
});

let p3 = Promise.race([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
