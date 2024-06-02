import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const result = await stripe.confirmPayment({
            
        })

    }
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement/>
            <button disabled={!stripe}>Submit</button>
        </form>
    );
};

export default CheckOutForm;