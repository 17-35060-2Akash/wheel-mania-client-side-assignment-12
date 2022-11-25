import React from 'react';
import img1 from '../../../assets/banners/15.jpg';
import img2 from '../../../assets/banners/12.jpg';
import img3 from '../../../assets/banners/14.jpg';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img2,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img1,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    },

];

const Carousel = () => {
    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}></BannerItem>)
            }

        </div>
    );
};

export default Carousel;