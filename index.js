const express = require("express");
const cors = require("cors");
const connect = require("./src/config/db");
const userRoute = require("./src/features/Routes/user.route");
const bmiRoute = require("./src/features/Routes/bmi.route");
const historyRoute = require("./src/features/Routes/history.route");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/auth", userRoute);
app.use("/calculation", bmiRoute);
app.use("/history", historyRoute);

app.get("/", (req, res) => {
  res.send("Hello React js ");
});

app.listen(8080, async () => {
  await connect();
  console.log("Listening at http://localhost:8080");
});
