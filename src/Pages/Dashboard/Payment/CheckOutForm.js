import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';


const CheckOutForm = ({ order }) => {
    const { seller_name, resale_price, seller_email } = order;

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const [processing, setProcessing] = useState(false);

    const [clientSecret, setClientSecret] = useState("");

    /*  useEffect(() => {
 
         fetch("http://localhost:5000/create-payment-intent", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
                 authorization: `bearer ${localStorage.getItem('accessToken')}`
             },
             body: JSON.stringify({ resale_price }),
         })
             .then((res) => res.json())
             .then((data) => setClientSecret(data.clientSecret));
     }, [resale_price]); */




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: seller_name,
                        email: seller_email,
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        console.log('paymentIntent', paymentIntent);

        /* if (paymentIntent.status === 'succeeded') {
            console.log(card)
            //store payment info in the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,

        }; */

        setProcessing(false);



    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <h1 className='text-xl font-semibold text-secondary mb-5'>CARD PAYMENT</h1>
                <CardElement className='border-4 h-10 hover:bg-slate-100 rounded-md'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                // backgroundColor: 'gray',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-md btn-secondary w-full mt-5 text-white text-lg' type="submit"
                    disabled={!stripe || !clientSecret}
                // disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            <p className='text-rose-600 mt-2 font-semibold'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p className=''>Your Transaction Id: <span className='font-bold'>{transactionID}</span></p>

                </div>
            }
        </React.Fragment>
    );
};

export default CheckOutForm;