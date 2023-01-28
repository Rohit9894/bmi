const mongoose = require("mongoose");
const { modelName } = require("./user.model");
const historySchema = new mongoose.Schema({
  email: String,
  value: Number,
});
const historyData = mongoose.model("history", historySchema);
module.exports = historyData;
