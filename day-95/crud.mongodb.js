// CRUD operations in MongoDB
use("CrudDb");

db.createCollection("courses");

// Create
// db.courses.insertOne({
//   name: "Asharib Dev",
//   price: 0,
//   assignments: 12,
//   projects: 45,
// });

// db.courses.insertMany([
//   {
//     name: "Asharib Dev Basics",
//     price: 0,
//     assignments: 12,
//     projects: 45,
//   },
//   {
//     name: "Asharib Dev Intermediate",
//     price: 50,
//     assignments: 15,
//     projects: 50,
//   },
//   {
//     name: "Asharib Dev Advanced",
//     price: 100,
//     assignments: 20,
//     projects: 55,
//   },
//   {
//     name: "Asharib Dev Expert",
//     price: 150,
//     assignments: 25,
//     projects: 60,
//   },
//   {
//     name: "Asharib Dev Professional",
//     price: 200,
//     assignments: 30,
//     projects: 65,
//   },
//   {
//     name: "Asharib Full Stack",
//     price: 250,
//     assignments: 35,
//     projects: 70,
//   },
//   {
//     name: "Asharib Frontend Mastery",
//     price: 300,
//     assignments: 40,
//     projects: 75,
//   },
//   {
//     name: "Asharib Backend Mastery",
//     price: 350,
//     assignments: 45,
//     projects: 80,
//   },
//   {
//     name: "Asharib UI/UX Design",
//     price: 400,
//     assignments: 50,
//     projects: 85,
//   },
//   {
//     name: "Asharib JavaScript Pro",
//     price: 450,
//     assignments: 55,
//     projects: 90,
//   },
// ]);

// Read
// let a = db.courses.find({ price: 0 });

// console.log(a.toArray());

// let b = db.courses.findOne({ price: 0 });

// console.log(b);

// UPDATE
// db.courses.updateOne(
//   {
//     price: 100,
//   },
//   { $set: { price: 1000 } }
// );

// db.courses.updateMany(
//   {
//     price: 0,
//   },
//   { $set: { price: 1000 } }
// );

// DELETE
// db.courses.deleteOne({
//   price: 1000,
// });

// db.courses.deleteMany({
//   price: 1000,
// });
