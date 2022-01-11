const router = require("express").Router();

// router.get("/user", (req, res) => {
//   res.send("Hello from user route");
// });

router.post("/userPostTest", (req, res) => {
  const username = req.body.username;
  console.log(username);
});

module.exports = router;
