import React from 'react';
import { FaArrowRight, FaClock } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Product = ({ product, setDeletingProduct, handleHitAdvertise }) => {
    const { _id, category_id, category_name, condition, description, email, img, location, original_price,
        mobile, posted_date, posted_time, product_name, resale_price, resale_status, seller_name, usage } = product;

    return (
        <div className="card glass rounded-md shadow-2xl bg-zinc-400   text-white hover:text-black">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="car!" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body font-bold">
                <h2 className="card-title text-xl lg:text-lg ">{category_name + ' ' + product_name}</h2>



                <div className='flex flex-row justify-between text-lg mt-2 '>
                    <div className="card-actions justify-start mt-2">
                        <div>
                            <h2 className="card-title flex flex-row justify-between align-middle">
                                <div className="badge badge-secondary">{category_name}</div>
                            </h2>
                        </div>
                        <div className="badge badge-outline bg-green-500 border-0 p-2">{resale_status}</div>
                    </div>


                    <div className='flex flex-row justify-between align-middle '>
                        <FaClock className='mr-1 text-gray-300 mt-1'></FaClock>
                        {posted_date}
                    </div>

                </div>

                <div className='text-start mt-4'>
                    <p>Condition: <span className=''>{condition}</span></p>
                    <p>Usage Time: {usage} years</p>
                    <p>Resale Price: <span className='text-primary'> {resale_price} BDT</span></p>
                </div>


                <div className='flex flex-col justify-between align-middle text-lg mt-6 '>
                    {
                        product.advertise === 'true' &&
                        <button onClick={() => handleHitAdvertise(product)} className="btn bg-amber-500 border-0 text-white">Stop Advertisement</button>

                    }
                    {
                        product.advertise === 'false' &&
                        <button onClick={() => handleHitAdvertise(product)} className="btn  btn-primary">Advertise</button>
                    }
                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn  btn-secondary px-8 mt-4">Delete</label>
                </div>

                {/* <div className='mt-4'>
                    <p>{description.slice(0, 99) + ' ...'}</p>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-ghost  text-2xl" title='View Details'><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default Product;