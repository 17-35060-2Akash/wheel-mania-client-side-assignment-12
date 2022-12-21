import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import img from '../../../assets/icons/12.png';

const Dashboard = () => {
    useTitle('Dashboard');
    const { user } = useContext(AuthContext);
    return (
        <div className='bg-slate-100 mx-auto' style={{ height: '100vw' }}>


            <div className=' my-auto  pt-56'>

                <h2 className='text-3xl mb-10 '>Hey, <span className='text-primary font-semibold uppercase'>{user?.displayName}</span></h2>
                <h2 className='text-xl mb-4 font-semibold ml-7'>Welcome To</h2>
                <div className='text-center my-8 '>
                    <img src={img} alt="" className='w-1/4 mx-auto' />
                </div>
                <h1 className='text-3xl text-secondary font-medium uppercase ml-7'>Dashboard</h1>
            </div>
        </div>
    );
};

export default Dashboard;