import React, { useState } from 'react';
const Contact = () => {

    return (
        <div className='h-[800px] lg:h-[900px] flex flex-col justify-center items-center'>
            <p className='text-2xl md:px-4 md:text-3xl mb-24 font-lighter uppercase pb-3' >
                <span className='bg-white px-2 py-2 pb-3'>
                    <span className='bg-secondary px-4 pb-1 text-white'>Send</span>
                    <span className='text-black font-bold pr-1'> Email</span>
                </span></p>
            <div className='w-96 p-9 pt-14 shadow-xl rounded-xl '>
                {/* <h2 className='text-2xl text-center font-lighter mb-9 font-lighter'>Send Me An Email</h2> */}
                <form action='https://formspree.io/f/mjvdboyd' method='POST' >

                    <div className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Name</span></label> */}
                        <input type="text" name="name"
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4 text-black" placeholder='Name' />

                    </div>

                    <div className="form-control w-full max-w-xs mb-6">
                        {/* <label className="label font-medium"><span className="label-text">Email</span></label> */}
                        <input type="email" name="email"
                            className="input input-bordered w-full max-w-xs rounded-none border-0 border-b-4 text-black" placeholder='Email' />
                    </div>

                    <div className="form-control w-full max-w-xs mb-6 border border-spacing-4">
                        {/* <label className="label font-medium"><span className="label-text">Name</span></label> */}
                        <textarea
                            name='message' className="textarea  h-36 w-full py-5 mb-5 text-black text-md px-4" placeholder="Message" title='not more than 200 words' ></textarea>
                    </div>

                    <input type="submit" value="Send" className='btn btn-neutral text-lg w-full bg-secondary text-white border-0 ' />

                </form>

            </div>
        </div>
    );
};

export default Contact;