const mongoose = require("mongoose");
const bmiSchema = new mongoose.Schema({
  weight: Number,
  height: Number,
});
const bmiData = mongoose.model("bmiData", bmiSchema);
module.exports = bmiData;
