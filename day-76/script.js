// async function getData() {
//   // Simulate getting data from a server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 53500);
//   });
// }

async function getData() {
  // Simulate getting data from a server
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  let data = await x.json();
  return data;

  // .then((response) => response.json())
  // .then((json) => console.log(json));
}

async function main() {
  console.log("Loading modules");

  console.log("do something else");

  console.log("Load data");

  let data = await getData();

  console.log(data);

  console.log("process data");

  console.log("task 2");
}
main();

// data.then((v) => {
//   console.log(data);

//   console.log("process data");

//   console.log("task 2");
// });
