import React from 'react';
import Review from './Review';
import people1 from '../../../assets/images/people1.jpg';
import people2 from '../../../assets/images/people2.jpg';
import people3 from '../../../assets/images/people3.png';


const UserReviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Aliyah Jordan',
            review: "I just want to say WheelMania.com has helped me find my Dream Car, a 2012-2014 Chrysler 300 SRT8, that's quite hard to find nowadays!",
            location: 'Killeen, TX',
            img: people1,

        },
        {
            _id: 2,
            name: 'Braddy Freddrich',
            review: 'WheelMania is very helpful to find those hard to find autos. Very convenient to search many sources at once to bring up a nice list with just one search.',
            location: 'Winchester, TN',
            img: people2,

        },
        {
            _id: 3,
            name: 'June Joseph jr.',
            review: "This website has been so useful in searching for a car. I am a first-time buyer, but it has also been a huge help to have a website where I can find all the information I need in one place.",
            location: 'Dallas, TX',
            img: people3,

        },
    ]
    return (
        <section className='my-16 px-10'>
            <div className='flex justify-between'>
                <div className='mb-16 mx-auto'>
                    <h1 className='text-3xl md:text-5xl font-lighter text-center text-cyan-500 my-20' >What People Are Saying</h1>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        datareview={review}
                    ></Review>)
                }
            </div>

        </section>
    );
};

export default UserReviews;