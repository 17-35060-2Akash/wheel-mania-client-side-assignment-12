import React from 'react';

const LoaderCircular = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div>
                    <p className='py-4'>Loading ... </p>
                </div>
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </div>
    );
};

export default LoaderCircular;