import React from 'react';
import { FaUser } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AdvertiseCard = ({ product }) => {

    const { _id, category_id, category_name, condition, description, email, img, location, original_price,
        mobile, posted_date, posted_time, product_name, resale_price, resale_status, seller_name, usage } = product;
    return (
        <div className="card rounded-md shadow-2xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="car!" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body font-bold">
                <h2 className="card-title font-bold text-xl lg:text-lg ">{category_name + ' ' + product_name}</h2>



                <div className='flex flex-row justify-between align-middle text-md mt-2 '>
                    <div className="card-actions justify-start mt-2">
                        <div>
                            <h2 className="card-title flex flex-row justify-between align-middle">
                                <div className="badge badge-secondary">{category_name}</div>
                            </h2>
                        </div>
                        <div className="badge badge-outline bg-green-500 border-0 p-2">{resale_status}</div>
                    </div>


                </div>


                <div className='text-start mt-4'>

                    <p className='text-center'>Resale Price: </p>
                    <p className='text-center bg-slate-300 py-2 rounded-lg mt-2 text-primary '> {resale_price} BDT</p>
                    {/* <p>Location: {location} years</p> */}

                </div>


            </div>
        </div>
    );
};

export default AdvertiseCard;