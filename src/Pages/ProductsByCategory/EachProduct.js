import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle, FaClock, FaPlus, FaUser } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useBuyer from '../../hooks/useBuyer';


const EachProduct = ({ product, setProduct, user, addToWishList }) => {
    // const [verification, setVerification] = useState('');

    // const [isBuyer] = useBuyer(user?.email);


    const { _id, category_id, category_name, condition, description, email, img, location, original_price,
        mobile, posted_date, posted_time, product_name, resale_price, resale_status, seller_name, usage } = product;

    //getting the seller
    const { data: seller = {}, refetch } = useQuery({
        queryKey: ['seller', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/seller?email=${email}`);
            const data = await res.json();
            return data;
        }
    });

    // console.log(seller);



    /* fetch(`http://localhost:5000/users/seller?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setVerification(data.verification);
        }) */








    return (
        <div className="card rounded-md shadow-2xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="car!" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body font-bold">
                <h2 className="card-title text-xl lg:text-lg ">{category_name + ' ' + product_name}</h2>



                <div className='flex flex-row justify-between align-middle text-md mt-2 '>
                    <div className="card-actions justify-start mt-2">
                        <div>
                            <h2 className="card-title flex flex-row justify-between align-middle">
                                <div className="badge badge-secondary">{category_name}</div>
                            </h2>
                        </div>
                        <div className="badge badge-outline bg-green-500 border-0 p-2">{resale_status}</div>
                    </div>


                    <div className='flex flex-row justify-between align-middle ' title='Add to Wishlist'>
                        {
                            // isBuyer &&
                            <button onClick={() => addToWishList(user?.email, product)} className="btn btn-sm bg-cyan-400 text-white border-0 text-lg"><FaPlus></FaPlus></button>
                        }
                    </div>

                </div>


                <div className='text-start mt-4'>
                    <p>Condition: <span className=''>{condition}</span></p>
                    <p>Usage Time: {usage} years</p>
                    <p>Original Price: <span className=''> {original_price} BDT</span></p>
                    <p>Resale Price: <span className='text-error'> {resale_price} BDT</span></p>
                    <p>Location: {location} years</p>
                    <p>Contact: {mobile}</p>

                </div>

                {/* <div className='mt-4'>
                    <p>{description}</p>
                    <p>{description.slice(0, 99) + ' ...'}</p>
                </div> */}

                <div className='flex flex-row justify-between align-middle mt-5'>
                    <div className='flex justify-start align-middle ml-1 mb-1'>
                        {/* {
                                photoURL ?
                                    <img className="mask mask-circle w-12 mr-4 mb-3" src={photoURL} alt='' />
                                    :
                                    <FaUser className='text-5xl mr-4 mb-3 mask mask-circle bg-gray-300 p-2'></FaUser>
                            } */}
                        <FaUser className='text-5xl mr-4 mb-3 mask mask-circle bg-gray-300 p-2'></FaUser>

                        <div className='text-start'>
                            <div className='flex flex-row '>
                                <span className=' text-md font-bold ml-1 text-primary mr-0'>{seller_name}</span>
                                {
                                    seller?.verification === 'verified' ?
                                        <FaCheckCircle className='ml-1 mt-1 text-cyan-500 text-md'></FaCheckCircle>
                                        :
                                        <></>

                                }
                            </div>

                            <div className='flex flex-row justify-between  mt-1'>
                                <FaClock className='mr-1 text-gray-300 text-lg'></FaClock>
                                <p className='text-sm font-lighter text-zinc-500'>{posted_time} {posted_date}</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='flex flex-row justify-between align-middle text-lg mt-6 '>
                    <label
                        onClick={() => setProduct(product)}
                        htmlFor="booking-modal" className="btn  btn-primary w-full text-white">Book Now</label>
                </div>


            </div>
        </div>
    );
};

export default EachProduct;