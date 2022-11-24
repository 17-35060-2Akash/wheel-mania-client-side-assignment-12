import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className='my-56 flex flex-col justify-center items-center'>
                <div>
                    <p className='py-4'>Loading ... </p>
                </div>
                <progress className="progress w-56 text-5xl"></progress>
            </div>
        </div>
    );
};

export default Loader;