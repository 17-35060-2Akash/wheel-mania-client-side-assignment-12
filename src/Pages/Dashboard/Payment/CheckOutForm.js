import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';


const CheckOutForm = ({ order }) => {
    useTitle('Check Out');
    const { seller_name, resale_price: price, seller_email } = order;
    // console.log(price);

    const stripe = useStripe();
    const elements = useElements();


    const [cardError, setCardError] = useState('');

    const [success, setSuccess] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const [processing, setProcessing] = useState(false);

    const [clientSecret, setClientSecret] = useState("");

    /*  useEffect(() => {
         fetch("https://wheel-mania-server.vercel.app/create-payment-intent", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({ price }),
         })
             .then((res) => res.json())
             .then((data) => setClientSecret(data.clientSecret));
     }, [price]); */



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        //form working till this line





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
                <p className='text-rose-600 mt-2 font-semibold'>{cardError}</p>

                <button className='btn btn-md btn-secondary w-full mt-5 text-white text-lg'
                    type="submit"
                    disabled={!stripe}
                // disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            {/* {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p className=''>Your Transaction Id: <span className='font-bold'>{transactionID}</span></p>

                </div>
            } */}
        </React.Fragment>
    );
};

export default CheckOutForm;