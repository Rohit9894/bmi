const express = require("express");
const bmiData = require("../Models/bmi.model");
const bmiRouter = express.Router();

bmiRouter.post("/", async (req, res) => {
  const { height, weight } = req.body;
  console.log(height, weight);
  let cal = weight / height;
  cal = parseFloat(cal).toFixed(2);
  res.send(cal);
});
module.exports = bmiRouter;
