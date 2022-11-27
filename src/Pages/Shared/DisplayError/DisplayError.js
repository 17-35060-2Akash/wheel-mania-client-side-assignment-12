import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    };

    return (
        <div className='my-60'>
            <p className='text-5xl mb-10 text-secondary'>Something has gone wrong!!</p>
            <h2 className='text-xl font-semibold text-error mb-2'>errror:</h2>
            <p className='text-2xl'>
                {error.statusText || error.message}
            </p>
            <h2 className='text-2xl mt-16'>Please <button onClick={handleLogOut} className='btn bg-error border-0 text-white font-semibold mx-5'>Sign Out</button> now.</h2>
        </div>
    );
};

export default DisplayError;