const express = require("express");

const historyData = require("../Models/history.model");
const historyRouter = express.Router();

historyRouter.post("/", async (req, res) => {
  let newData = new historyData(req.body);
  await newData.save();
  res.send("added");
});
historyRouter.get("/", async (req, res) => {
  const { authorization } = req.headers;

  let data = await historyData.find({ email: authorization }).limit(6);
  res.send(data);
});

module.exports = historyRouter;
