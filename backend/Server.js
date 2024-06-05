const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Data = require("./dataModel"); // Import the Data model

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://shrutijuyal11:mAiao0uXixXS1Ui0@mernapp.sovmxnv.mongodb.net/?retryWrites=true&w=majority&appName=MERNApp", { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// API endpoint to save data
app.post("/user", async (req, res) => {
  try {
    const { items, total } = req.body;
    const newData = new Data({ items, total }); // Create a new instance of Data model
    await newData.save(); // Save the data to MongoDB
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ success: false, error: "Error saving data" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));




