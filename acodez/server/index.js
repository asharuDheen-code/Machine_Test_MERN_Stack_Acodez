const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/dbConnection");
const userRouter = require("./Router/User");
const cors = require("cors");

require("dotenv").config({
  path: "./config/config.env",
});

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

db.connect();

app.use(bodyParser.json());

app.use("/", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
