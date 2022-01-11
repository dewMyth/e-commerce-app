const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(
  () => {
    console.log("Mongo Cloud Database Connected Successfully!");
  },
  (err) => {
    console.log("Error: ", err);
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
