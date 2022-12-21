import React from 'react';
import quote from '../../../assets/icons/quote.svg';


const Review = ({ datareview }) => {
    const { name, img, review, location } = datareview;
    return (
        <div className="card each-category bg-base-100 shadow-xl glass">
            <div className="card-body">
                <figure>
                    <img src={quote} alt="" className='w-20 lg:w-20' />
                </figure>
                <div className="card-actions items-center mt-6 mb-2">
                    <div className="avatar mr-4">
                        <div className="w-16 rounded-full ring ring-cyan-400 ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg font-bold'>{name}</h5>
                        <p className='font-semibold text-start'>{location}</p>
                    </div>
                </div>

                <p className='text-start p-3 mt-2'>-{review}</p>
            </div>
        </div>
    );
};

export default Review;