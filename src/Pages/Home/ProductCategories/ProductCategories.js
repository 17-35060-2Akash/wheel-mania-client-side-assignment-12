import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const ProductCategories = () => {
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });


    return (
        <section className='my-20 mb-40'>
            <div className='flex justify-between flex-col'>
                <div className='my-10 mb-20'>
                    <h1 className='text-3xl md:text-5xl font-lighter text-center text-secondary my-20' >Our Reselling Categories</h1>
                </div>

            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}></Category>)
                }
            </div>
        </section>
    );
};

export default ProductCategories;