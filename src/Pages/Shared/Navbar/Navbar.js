import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import titlelogo from '../../../assets/icons/12.png';

const Navbar = () => {
    const location = useLocation();
    const menuItems =
        <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/about'>Blog</Link></li>
            <li><Link to='/login'>Login</Link></li>

            {/*  {
            user?.uid ?
                <React.Fragment>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><button onClick={handleLogOut} className='btn btn-ghost'>Sign Out</button></li>
                </React.Fragment>
                :
                <li><Link to='/login'>Login</Link></li>
        } */}
        </React.Fragment>;

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-start">
                    <Link to='/' className="btn btn-ghost normal-case " state={{ from: location }} replace>
                        <img className='w-56 logo-img' src={titlelogo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end pr-4 text-primary text-xl font-bold">
                {/* <h3>{user?.displayName ? user?.displayName : 'User'}</h3> */}
                <h3>Hi, User</h3>
            </div>
            {/* <label htmlFor="dashboarddrawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}
        </div>
    );
};

export default Navbar;