import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboarddrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboarddrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        {/* <!-- Sidebar content here --> */}

                        {/* for buyer  */}
                        {
                            isBuyer &&
                            <React.Fragment>
                                <li className='bg-white py-1 rounded-t-xl'> <Link to='/dashboard/myorders'>My Orders</Link></li>
                                <li className='bg-white py-1 rounded-b-xl'> <Link to='/dashboard/mywishlist'>My WishList</Link></li>
                            </React.Fragment>

                        }

                        {/* for seller  */}
                        {
                            isSeller &&
                            <React.Fragment>
                                <li className='bg-white py-1 rounded-t-xl'> <Link to='/dashboard/addproduct'>Add a Product</Link></li>
                                <li className='bg-white py-1 rounded-b-xl'> <Link to='/dashboard/myproducts'>My Products</Link></li>
                            </React.Fragment>

                        }


                        {/* for admin  */}
                        {
                            isAdmin &&
                            <React.Fragment>
                                <li className='bg-white py-1 rounded-t-xl'> <Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li className='bg-white py-1'> <Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li className='bg-white py-1 rounded-b-xl'> <Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </React.Fragment>

                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;