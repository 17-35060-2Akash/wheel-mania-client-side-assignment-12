import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ product, user, setProduct }) => {
    const { _id, category_id, category_name, condition, description, email: seller_email, img, location: seller_location, original_price,
        mobile: seller_mobile, posted_date, posted_time, product_name, resale_price, resale_status, seller_name, usage } = product;
    // console.log(user);
    const { displayName, email } = user;

    const handleBooking = event => {
        event.preventDefault();
        const userPhone = event.target.phone.value;
        const userLocation = event.target.location.value;

        const booking = {
            category_id,
            category_name,
            product_id: _id,
            product_name,
            seller_email,
            seller_name,
            product_img: img,
            seller_location,
            seller_mobile,
            resale_price,
            booker_user_phone: userPhone,
            booker_user_location: userLocation,
            booker_user_name: displayName,
            booker_user_email: email,
            order_status: 'pending'
        }
        // console.log(booking);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success(`Booking Successful`);
                    // navigate('/dashboard/myproducts');
                    setProduct(null);
                }
                else {
                    toast.success(`Something went wrong in the booking`);
                }
            });


    };

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-semibold text-cyan-600 mt-2">{category_name + ' ' + product_name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-10'>
                        <p className='text-start text-xl font-semibold ml-2'>Product Info:</p>
                        <input type="text" value={'Model: ' + product_name} readOnly className="input w-full border-0 border-gray-100 bg-base-200 font-semibold" />
                        <input type="text" value={'Brand: ' + category_name} readOnly className="input w-full border-0 border-gray-100 bg-base-200 font-semibold" />
                        <input type="text" value={resale_price + ' ' + 'BDT'} readOnly className="input w-full border-0 border-gray-100 bg-base-200 font-semibold text-primary" />

                        <br />

                        <p className='text-start text-xl font-semibold ml-2'>Your Info:</p>
                        <input type="text" value={displayName} readOnly className="input w-full border-0 border-gray-100 bg-base-200 font-semibold" />
                        <input type="text" value={email} readOnly className="input w-full border-0 border-gray-100 bg-base-200 font-semibold" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full  border-4 border-gray-100 bg-base-100" />
                        <input type="text" name='location' placeholder="Meeting Location" className="input w-full  border-4 border-gray-100 bg-base-100" />
                        <br />
                        <input className='btn w-full btn-secondary text-white font-bold text-lg' type="submit" value="Book" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;