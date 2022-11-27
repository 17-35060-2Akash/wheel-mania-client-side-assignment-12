import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';
import Loader from '../../../components/Loader';
import { AuthContext } from '../../../contexts/AuthProvider';
import Product from './Product';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);

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

    const handleDeleteProduct = (product) => {
        // console.log(product);
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${product.product_name} deletion successful!`);
                }
                else {
                    toast.error('Something went wrong!');
                }
            })
    };



    const closeModal = () => {
        setDeletingProduct(null);
    }

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
                        product={product}
                        setDeletingProduct={setDeletingProduct}></Product>)
                }
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you want to delete "${deletingProduct.product_name}" 
                it'll be parmanently deleted from Wheel Mania.`}
                    successButtonName="DELETE"
                    successAction={handleDeleteProduct}
                    modalData={deletingProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;