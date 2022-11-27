import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import Loader from '../../../components/Loader';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const order = useLoaderData();
    const navigation = useNavigation();
    console.log(order);

    if (navigation.state === 'loading') {
        return <Loader></Loader>
    }
    return (
        <div>
            <div className='mt-20'>
                <h2 className="text-xl font-medium my-10 ml-1 ">PAYMENT FOR <br /><span className='text-green-600 text-bold text-2xl'>{order?.category_name + ' ' + order?.product_name}</span></h2>
                <h3 className='text-md font-medium'>Please clear the payment here using your card details of <span className='text-secondary font-bold text-xl'>{order?.resale_price}</span> BDT </h3>
            </div>

            <div className='w-2/3 mx-auto mt-20 shadow-2xl p-20 rounded-xl'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        order={order}
                    ></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;