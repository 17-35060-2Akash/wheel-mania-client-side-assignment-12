import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

const AdvertisedItems = () => {

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['advertisements'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertisements');
            const data = await res.json();
            return data;
        }
    });

    return (
        <React.Fragment>
            {
                products.length > 0 &&
                <section className='my-16'>
                    <div className='flex justify-between flex-col'>
                        <div className='mb-10 mx-auto'>
                            <h1 className='text-3xl md:text-5xl font-lighter text-center text-secondary my-20' >Checkout Fresh Deals</h1>
                        </div>
                        <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 lg:mx-28'>
                            {
                                products.map(product => <AdvertiseCard
                                    key={product._id}
                                    product={product}></AdvertiseCard>)
                            }
                        </div>
                    </div>
                </section>
            }
        </React.Fragment>

    );
};

export default AdvertisedItems;