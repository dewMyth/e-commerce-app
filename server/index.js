const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//Routes
const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");
const productRoute = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");
const orderRoute = require("./routes/order.route");
const stripeRoute = require("./routes/stripe");

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

app.use(express.json()); // for parsing application/json - important to take json input as object

app.use(cors());

//Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server started on port 5000");
});
