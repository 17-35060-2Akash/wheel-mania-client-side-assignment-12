import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [payement, setPayment] = useState(null);

    const navigate = useNavigate();

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    console.log(orders);

    const closeModal = () => {
        setPayment(null);
    };

    const handlePayement = order => {
        // console.log(order._id);
        navigate(`/payment/${order._id}`)
    };


    return (
        <div className=''>
            <h2 className="text-2xl font-medium my-10 ml-1 text-purple-600">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className=''></th>
                            <th className=''>Product Picture</th>
                            <th className='text-center'>Title</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td className='text-center'>
                                    <img src={order?.product_img} alt="" className='w-24 mask mask-squircle' />
                                </td>
                                <td className='text-center font-semibold'>{order?.product_name}</td>
                                <td className='text-purple-600 font-semibold text-center'>{order?.resale_price} BDT</td>
                                {/* <td className='text-center'>
                                    {
                                        seller?.verification === 'verified' ?
                                            <p className='badge badge-success py-4 font-semibold'>verified</p>
                                            :
                                            <button onClick={() => handleVerifySeller(seller._id)} className='btn btn-sm bg-cyan-400 border-0 text-white font-semibold'>{seller.verification}</button>

                                    }
                                </td> */}
                                <td className='text-center'>
                                    <label onClick={() => setPayment(order)} htmlFor="confirmation-modal" className='btn btn-sm btn-error font-semibold text-white'>Pay</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                payement && <ConfirmationModal
                    title={`Ready for payment?`}
                    message={`Want to proceed to playment for ${payement.product_name}?`}
                    closeModal={closeModal}
                    successAction={handlePayement}
                    modalData={payement}
                    successButtonName={'Yes'}></ConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;