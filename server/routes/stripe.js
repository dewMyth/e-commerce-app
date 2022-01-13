const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51KHASEIP4C80aCDxW0vYC84wi2ze9vbCqnGptZLcXL6cLbYkJ7e9hDZWhn69KuTtuXxYAp7ewKmsTlXuRq7bI8bG00BXaEBUTr"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
