// Select the database to use.
use("SigmaDatabase");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
  {
    name: "python",
    instructor: "asharib1",
    price: 10000,
  },
  {
    name: "javascript",
    instructor: "asharib2",
    price: 10050,
  },
  {
    name: "java",
    instructor: "asharib3",
    price: 10100,
  },
  {
    name: "c++",
    instructor: "asharib4",
    price: 10150,
  },
  {
    name: "c#",
    instructor: "asharib5",
    price: 10200,
  },
  {
    name: "php",
    instructor: "asharib6",
    price: 10250,
  },
  {
    name: "ruby",
    instructor: "asharib7",
    price: 10300,
  },
  {
    name: "swift",
    instructor: "asharib8",
    price: 10350,
  },
  {
    name: "kotlin",
    instructor: "asharib9",
    price: 10400,
  },
  {
    name: "dart",
    instructor: "asharib10",
    price: 10450,
  },
]);

// Print a message to the output window.
console.log(`Done inserting data`);
