import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader';
import LoaderCircular from '../../../components/LoaderCircular';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const [product, setProduct] = useState({});

    const { user } = useContext(AuthContext);
    const imageHostingKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });

    // console.log(categories);

    const handleAddProduct = data => {

        if (data.description.length > 300) {
            return toast.error("Description can't be more than 300 words!");
        }

        // console.log(data);
        const { category_id } = data;

        const category = categories.find(category => category_id === category._id);
        const category_name = category.name;
        const date = new Date();
        const posted_date = format(date, 'PP');
        const posted_time = format(date, 'p');
        // console.log(category_name);

        //uploading data to imgbb
        const img = data.img[0];
        // console.log(img);
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                // console.log(imageData);
                if (imageData.success) {

                    const carInfo = {
                        category_id,
                        category_name,
                        product_name: data.product_name,
                        location: data.location,
                        img: imageData.data.url,
                        original_price: data.original_price,
                        resale_price: data.resale_price,
                        usage: data.usage,
                        posted_date,
                        posted_time,
                        condition: data.condition,
                        seller_name: user?.displayName,
                        email: user?.email,
                        mobile: data.mobile,
                        resale_status: 'Available',
                        description: data.description,
                    }

                    console.log(carInfo);

                    //save product info to the db
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(carInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success(`Your "${category_name}" is added succesfully to your resale listing.`);
                                navigate('/dashboard/myproducts');
                            }
                        })

                }
            })





        // console.log(format(carInfo.posted_date, 'PP'));
        // console.log(format(carInfo.posted_date, 'p'));



    };

    if (isLoading) {
        return <Loader></Loader>
    }



    return (
        <div className=''>



            <form onSubmit={handleSubmit(handleAddProduct)} className='pb-36 pt-5 px-10  md:px-60 bg-slate-100  mx-auto '>
                <div className="my-16 lg:my-20 mb-16 lg:mb-20">
                    <h1 className='text-2xl lg:text-4xl font-semibold add-title text-secondary'>Add Your Product</h1>
                </div>
                <div className='mb-5 '>
                    <select {...register("category_id", { required: "Category_id is required." })} name='category_id' className="select select-bordered w-full border-4 border-gray-100 h-14 text-md px-10">
                        <option disabled selected>Choose a brand category:</option>
                        {
                            categories.map(category => <option value={category._id} //[category.name, category._id]

                                key={category._id}>{category.name}</option>)
                        }
                        {/* {errors.category_id && <p className='text-error p-1'>{errors.category_id.message}</p>} */}
                    </select>

                </div>
                <div className='mb-5'>
                    <input {...register("product_name", { required: "Product name is required." })} type="text" name='product_name' placeholder="Product Name" className="input input-ghost w-full bg-white h-14 text-md px-10" />
                    {errors.product_name && <p className='text-error p-1'>{errors.product_name.message}</p>}
                </div>
                <div className='mb-5'>
                    <input {...register("img", { required: "Image is required." })} type="file" name='img' placeholder="Image URL" className="file-input file-input-md file-input-secondary border-0 w-full bg-white  text-md " />
                    {errors.img && <p className='text-error p-1'>{errors.img.message}</p>}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input {...register("original_price", { required: "Original price is required." })} type="text" name='original_price' placeholder="Original Price" title='only add the amount' className="input input-ghost w-full bg-white h-14 text-md px-10" />
                    <input {...register("resale_price", { required: "Resale_price is required." })} type="text" name='resale_price' placeholder="Resale Price" title='only add the amount' defaultValue={''} className="input input-ghost w-full bg-white h-14 text-md px-10" />
                    {errors.original_price && <p className='text-error p-1'>{errors.original_price.message}</p>}
                    {errors.resale_price && <p className='text-error p-1'>{errors.resale_price.message}</p>}

                </div>

                <div className='mb-5'>
                    <input {...register("location", { required: "Location is required." })} type="text" name='location' placeholder="Location" className="input input-ghost w-full bg-white h-14 text-md px-10" />
                    {errors.location && <p className='text-error p-1'>{errors.location.message}</p>}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input {...register("usage", { required: "Usage Year is required." })} type="text" name='usage' placeholder="Usage Years" title='only add years' className="input input-ghost w-full bg-white h-14 text-md px-10" />
                    <select {...register("condition", { required: "Condition is required." })} name='condition' className="select select-bordered w-full border-4 border-gray-100 h-14 text-md px-10">
                        <option disabled selected>Choose condition:</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    {errors.usage && <p className='text-error p-1'>{errors.usage.message}</p>}
                    {/* {errors.condition && <p className='text-error p-1'>{errors.condition.message}</p>} */}
                </div>

                <div className='mb-5'>
                    <input defaultValue={user?.displayName} type="text" name='seller_name' className="input input-ghost w-full bg-white h-14 text-md px-10" readOnly />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input defaultValue={user?.email} type="text" name='seller_email' className="input input-ghost w-full bg-white h-14 text-md px-10" readOnly />
                    <input {...register("mobile", { required: "Mobile number is required." })} type="text" name='mobile' placeholder="Mobile" title='only add numbers and special signs' defaultValue={''} className="input input-ghost w-full bg-white h-14 text-md px-10" />
                    {errors.mobile && <p className='text-error p-1'>{errors.mobile.message}</p>}
                </div>



                <textarea {...register("description", { required: "Description is required." })} name='description' className="textarea  h-36 w-full py-5 mb-5 bg-white text-md px-10" placeholder="Description" title='not more than 300 words' ></textarea>
                {errors.mobile && <p className='text-error p-1 mb-5'>{errors.mobile.message}</p>}

                <input className='btn bg-green-500 border-0 w-full h-14 text-md font-bold text-white' type='submit' value='Add Your Product' />

            </form>

        </div>
    );
};

export default AddProduct;