import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import titlelogo from '../../../assets/icons/12.png';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    };

    const menuItems =
        <React.Fragment>
            <li><Link to='/'>Home</Link></li>
            {
                user?.uid &&
                <li><Link to='/dashboard'>Dashboard</Link></li>

            }

            <li><Link to='/blog'>Blog</Link></li>

            {
                user?.uid ?
                    <React.Fragment>
                        <li><button onClick={handleLogOut} className='btn btn-ghost hover:btn-error hover:rounded-lg font-semibold'>Sign Out</button></li>
                    </React.Fragment>
                    :
                    <li><Link to='/login'>Login</Link></li>
            }
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
            <div className="navbar-end pr-1 md:pr-4 text-sm md:text-xl font-semibold">
                {user?.displayName ?

                    <h3>Hi, <span className='text-primary'>{user?.displayName}</span> </h3>
                    : ''

                }

            </div>
            <label htmlFor="dashboarddrawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;