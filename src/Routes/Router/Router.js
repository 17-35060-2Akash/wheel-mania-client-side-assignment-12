import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyWishlist from "../../Pages/Dashboard/MyWishlist/MyWishlist";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Blog from "../../Pages/Others/Blog/Blog";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import ProductsByCategory from "../../Pages/ProductsByCategory/ProductsByCategory";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element:
                    <PrivateRoute>
                        <ProductsByCategory></ProductsByCategory>
                    </PrivateRoute>,
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/dashboard',
        element:
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },

            ///for buyers
            {
                path: '/dashboard/myorders',
                element:
                    <BuyerRoute>
                        <MyOrders></MyOrders>
                    </BuyerRoute>
            },
            {
                path: '/dashboard/mywishlist',
                element:
                    <BuyerRoute>
                        <MyWishlist></MyWishlist>
                    </BuyerRoute>
            },

            ///for sellers
            {
                path: '/dashboard/addproduct',
                element:
                    <SellerRoute>
                        <AddProduct></AddProduct>
                    </SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element:
                    <SellerRoute>
                        <MyProducts></MyProducts>
                    </SellerRoute>
            },

            ///for admin
            {
                path: '/dashboard/allsellers',
                element:
                    <AdminRoute>
                        <AllSellers></AllSellers>
                    </AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element:
                    <AdminRoute>
                        <AllBuyers></AllBuyers>
                    </AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element:
                    <AdminRoute>
                        <ReportedItems></ReportedItems>
                    </AdminRoute>
            },
            ///for everyone to pay
            {
                path: '/dashboard/payment/:id',
                element:
                    <Payment></Payment>,
                loader: async ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);