const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripErr, stripRes) => {
      if (stripErr) {
        res.status(500).json(stripErr);
      } else {
        res.status(200).json(stripRes);
      }
    }
  );
});

module.exports = router;
