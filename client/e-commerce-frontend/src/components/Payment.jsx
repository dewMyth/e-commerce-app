import React from "react";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const STRIPE_PUBLIC_KEY =
  "pk_test_51KHASEIP4C80aCDx5dQBGjQXrsfz7etGOdICkPuT9EW0oGzGGmtJ5FwiSVpg5URhfWnH7lTMKzpaSZH5IUhAt7sL00pwpLInj4";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 500,
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <StripeCheckout
      name="E-commerce"
      image="https://cdn5.f-cdn.com/contestentries/1785234/16488850/5ef817ff946dc_thumb900.jpg"
      billingAddress
      shippingAddress
      description="$5 for 5 email credits"
      amount={500}
      token={onToken}
      stripeKey={STRIPE_PUBLIC_KEY}
    >
      <button>Pay Now</button>
    </StripeCheckout>
  );
};

export default Payment;
