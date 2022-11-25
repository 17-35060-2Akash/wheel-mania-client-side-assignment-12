import React from 'react';
import img from '../../../assets/banners/11.jpg'

const Intro = () => {
    return (
        <section className='my-16'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row ">
                    <img src={img} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='pl-5'>
                        <h1 className='text-3xl md:text-4xl mb-7 font-lighter text-center text-secondary' >How Wheel Mania Works</h1>
                        <p className='text-xl px-4 font-lighter'>We aggregate millions of listings from
                            dealers and private sellers, showing all the
                            old, latest and also vintage rides for at one site
                            for a haserdless experience. Wheel Mania is driven by professional
                            car experts and mechanics to enlighten your safe and value for money
                            resell services. We also generate comparisons among our available listing and
                            making sure everyone's getting the right deals.
                            Growing since 2007, Wheel Mania has been listed over a thousand rides and enjoying
                            nearly 90% market success. </p>
                        {/* <button className="btn btn-primary  text-white border-0 bg-secondary ">Get Started</button> */}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Intro;