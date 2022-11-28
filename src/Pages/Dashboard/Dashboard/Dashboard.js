import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Dashboard = () => {
    useTitle('Dashboard');
    const { user } = useContext(AuthContext);
    return (
        <div className='bg-slate-100 mx-auto' style={{ height: '100vw' }}>
            <div className='py-40 my-auto  pt-64'>
                <h2 className='text-3xl mb-16 '>Hey, <span className='text-primary font-semibold'>{user?.displayName}</span></h2>
                <h2 className='text-xl mb-4 font-semibold'>Welcome To</h2>
                <h1 className='text-3xl text-secondary font-medium'>Wheel Mania <br /> Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;