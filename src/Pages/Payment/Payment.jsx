import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const pk = import.meta.env.VITE_STRIPE_PAYMENT_KEY;
    const stripePromise = loadStripe(pk);
    return (
        <Elements stripe={stripePromise}>
<CheckOutForm/>
        </Elements>
    );
};

export default Payment;