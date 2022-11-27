import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import EachProduct from './EachProduct';

const ProductsByCategory = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);
    const { user } = useContext(AuthContext);
    // console.log(products);


    return (
        <div>
            <div className="my-16 lg:my-20 mb-16 lg:mb-20">
                <h1 className='text-2xl lg:text-4xl font-semibold add-title'>CATEGORY: <span className='text-secondary'>{products[0].category_name}</span></h1>
            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 lg:mx-28'>
                {
                    products.map(product => <EachProduct
                        key={product._id}
                        product={product}
                        setProduct={setProduct}></EachProduct>)
                }
            </div>
            {
                product && <BookingModal
                    product={product}
                    user={user}
                    setProduct={setProduct}></BookingModal>
            }
        </div>
    );
};

export default ProductsByCategory;