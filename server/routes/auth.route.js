const router = require("express").Router();
const User = require("../models/User.model");

const CryptoJS = require("crypto-js");

//Register User
router.post("/register", async (req, res) => {
  console.log(req.body);
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET_KEY
    ).toString(),
  });

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login User
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json({ message: "User not found" });

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET_KEY
    );
    const password = hashedPassword.toString(CryptoJS.enc.Utf8);
    password !== req.body.password &&
      res.status(401).json({ message: "Wrong password" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
