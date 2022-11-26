import React from 'react';

const LoaderCircular = () => {
    return (
        <div>
            <div className="flex justify-center items-center my-20 text-2xl text-primary">
                <div>
                    <p className='py-4 '>Loading ... </p>
                </div>
                <br />
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    );
};

export default LoaderCircular;