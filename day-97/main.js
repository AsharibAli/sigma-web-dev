const express = require("express");
const mongoose = require("mongoose");
// Set up Express app
const app = express();
const port = 3000;

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define schema for employees collection
const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

const Employee = mongoose.model("Employee", employeeSchema);

// Route to handle button click event
app.post("/generate-data", async (req, res) => {
  try {
    // Clear employees collection
    await Employee.deleteMany();

    // Generate and insert 10 dummy data records
    const dummyData = [
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      {
        name: "Asharib",
        salary: 40000,
        language: "Python",
        city: "New York",
        isManager: true,
      },
      // Add more dummy data records here
    ];

    await Employee.create(dummyData);

    res.status(200).send("Data generated successfully");
  } catch (error) {
    console.error("Error generating data:", error);
    res.status(500).send("Error generating data");
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
