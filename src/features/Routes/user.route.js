const express = require("express");
const userData = require("../Models/user.model");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const oldUser = await userData.findOne({ email });
    if (oldUser) {
      return res.send({ msg: "already" });
    }
    let newUser = new userData(req.body);
    await newUser.save();
    res.send({ msg: "succesful" });
  } catch (e) {
    res.send({ msg: e.message });
  }
});
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userData.findOne({ email });

    if (user) {
      if (password === user.password) {
        res.send({ msg: "login successful", name: user.name, email });
      } else {
        res.send({ msg: "incorrect password" });
      }
    } else {
      res.send({ msg: "email not resgisterd" });
    }
  } catch (e) {
    res.send(e.message);
  }
});
module.exports = userRouter;
