import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_EgaeqwoPyOeB26JZ6FF6obdv'
  : 'pk_test_EgaeqwoPyOeB26JZ6FF6obdv';
const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? '/api/stripe'
  : '/api/stripe';

const CURRENCY = 'USD';

const fromEuroToCent = amount => amount * 100;

// elevated this to the CheckoutPage
// const successPayment = data => {
//   alert('Payment Successful');
// };

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description, successPayment) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount, successPayment }) =>
  <StripeCheckout
    bitcoin
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description, successPayment)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />

export default Checkout;