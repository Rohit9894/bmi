// "mongodb+srv://r:g@cluster0.fjubkcl.mongodb.net/mock-11?retryWrites=true&w=majority"
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
});
const userData = mongoose.model("user", userSchema);
module.exports = userData;
