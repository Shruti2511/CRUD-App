const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  items: [{ name: String, price: Number }],
  total: Number
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
