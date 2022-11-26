import { useQuery } from '@tanstack/react-query';
import id from 'date-fns/esm/locale/id/index.js';
import React, { useContext } from 'react';
import Loader from '../../../components/Loader';
import { AuthContext } from '../../../contexts/AuthProvider';
import Product from './Product';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    // console.log(products);

    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div className="my-16 lg:my-20 mb-16 lg:mb-20">
                <h1 className='text-2xl lg:text-4xl font-semibold add-title text-secondary'>My Listings</h1>
            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-10 '>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default MyProducts;