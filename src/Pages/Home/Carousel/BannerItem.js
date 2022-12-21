import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">

            <div className='carousel-img'>
                <img src={image} alt='' className="w-full " />
            </div>
            {/* <div className="absolute flex flex-col justify-end transform -translate-y-1/2 lg:right-24 right-5  top-1/2">
                <h1 className='text-xl md:text-4xl font-semibold text-white text-end carousel-add'>THE  <span className='text-primary  font-bold'> FASTEST</span><br /> PLACE  TO SELL  YOUR RIDE</h1>
            </div> */}

            <div className="absolute flex flex-col justify-end transform -translate-y-1/2 lg:right-24 right-5 top-1/2 md:top-2/3 ">
                <h1 className='text-lg md:text-4xl lg:text-5xl font-semibold text-white text-end lg:pb-2'>THE  <span className='text-primary font-bold'> FASTEST</span><br /> PLACE  TO SELL  YOUR RIDE</h1>
                <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold text-white text-end '>  THE <span className='text-error font-bold'>EASIEST</span> WAY TO BUY <br /> YOUR NEXT ONE</h1>
            </div>



            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-14 bottom-6">
                <a href={`#slide${prev}`} className="btn btn-circle mr-6 text-xl text-white hover:text-secondary slide-button ">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle text-xl text-white hover:text-secondary slide-button ">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;