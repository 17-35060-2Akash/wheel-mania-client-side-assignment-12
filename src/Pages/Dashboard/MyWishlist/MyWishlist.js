import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';
import WishListCard from './WishListCard';
import BookingModal from '../../BookingModal/BookingModal';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../../hooks/useTitle';


const MyWishlist = () => {
    useTitle('My Wishlist');
    const { user } = useContext(AuthContext);
    const [payement, setPayment] = useState(null);
    // const [wishList, setWishList] = useState([]);

    const navigate = useNavigate();

    const { data: wishList = [], isLoading, refetch } = useQuery({
        queryKey: ['wishlistproducts', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://wheel-mania-server.vercel.app/wishlistproducts?user_email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });


    /* useEffect(() => {
        axios.get(`https://wheel-mania-server.vercel.app/wishlistproducts?user_email=${user?.email}`)
            .then(data => setWishList(data.data))
    }, [user?.email, wishList]); */



    const closeModal = () => {
        setPayment(null);
    };

    const handlePayement = item => {
        // console.log(item)
        // console.log(item.product._id);
        navigate(`/dashboard/payment/${item.product._id}`)
    };

    return (
        <div>
            <h2 className="text-2xl font-medium my-10 ml-1 text-purple-600">My Wishlist</h2>

            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 lg:mx-28'>
                {
                    wishList.map(item => <WishListCard
                        key={item._id}
                        item={item}
                        setPayment={setPayment}
                    ></WishListCard>)
                }
            </div>
            {
                payement && <ConfirmationModal
                    title={`Ready for payment?`}
                    message={`Want to proceed to playment for ${payement.product.product_name}?`}
                    closeModal={closeModal}
                    successAction={handlePayement}
                    modalData={payement}
                    successButtonName={'Yes'}></ConfirmationModal>
            }

        </div>
    );
};

export default MyWishlist;