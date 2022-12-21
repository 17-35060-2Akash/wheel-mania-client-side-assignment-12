import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AllBuyers = () => {
    useTitle('All Buyers');

    const { user } = useContext(AuthContext);
    const [deleteBuyer, setDeleteBuyer] = useState(null);

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://wheel-mania-server.vercel.app/users/buyers?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    // console.log(buyers);

    const closeModal = () => {
        setDeleteBuyer(null);
    };

    const handleDeleteBuyer = buyer => {
        fetch(`https://wheel-mania-server.vercel.app/users/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Buyer deleted successfully.`)
                    refetch();
                }
                else {
                    toast.error('There is something wrong');
                }

            })
    };



    return (
        <div className=''>
            <h2 className="text-2xl font-medium my-10 ml-1 text-primary">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'></th>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th className='text-center'>{i + 1}</th>
                                <td className='text-center'>{buyer.name}</td>
                                <td className='text-center'>{buyer.email}</td>
                                <td className='text-center'>{buyer.verification}</td>
                                {/* <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                <td className='text-center'>
                                    <label onClick={() => setDeleteBuyer(buyer)} htmlFor="confirmation-modal" className='btn btn-sm btn-error font-semibold text-white'>Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteBuyer && <ConfirmationModal
                    title={`Are you sure you want to delete ${deleteBuyer.name}?`}
                    message={`If you delete a seller, the buyer won't be able to get access.`}
                    closeModal={closeModal}
                    successAction={handleDeleteBuyer}
                    modalData={deleteBuyer}
                    successButtonName={'delete'}></ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;