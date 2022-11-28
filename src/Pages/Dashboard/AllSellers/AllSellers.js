import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AllSellers = () => {
    useTitle('All Sellers');

    const { user } = useContext(AuthContext);
    const [deleteSeller, setDeleteSeller] = useState(null);


    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/sellers?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    // console.log(sellers);


    const handleVerifySeller = (id) => {
        fetch(`http://localhost:5000/users/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller is verified!');
                    refetch();
                }
                else {
                    toast.error('Something went wrong.');

                }
            })
    }

    const closeModal = () => {
        setDeleteSeller(null);
    };

    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Seller deleted successfully.`)
                    refetch();
                }
                else {
                    toast.error('There is something wrong');
                }

            })
    };


    return (
        <div className=''>
            <h2 className="text-2xl font-medium my-10 ml-1 text-secondary">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'></th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td className='text-center'>
                                    {
                                        seller?.verification === 'verified' ?
                                            <p className='badge badge-success py-4 font-semibold'>verified</p>
                                            :
                                            <button onClick={() => handleVerifySeller(seller._id)} className='btn btn-sm bg-cyan-400 border-0 text-white font-semibold'>{seller.verification}</button>

                                    }
                                </td>
                                {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                <td className='text-center'>
                                    <label onClick={() => setDeleteSeller(seller)} htmlFor="confirmation-modal" className='btn btn-sm btn-error font-semibold text-white'>Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteSeller && <ConfirmationModal
                    title={`Are you sure you want to delete ${deleteSeller.name}?`}
                    message={`If you delete a seller, the seller won't be able to get access.`}
                    closeModal={closeModal}
                    successAction={handleDeleteSeller}
                    modalData={deleteSeller}
                    successButtonName={'delete'}></ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;