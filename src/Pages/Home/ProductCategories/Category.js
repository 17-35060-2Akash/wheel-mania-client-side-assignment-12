import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { _id, name, image, logo } = category;
    return (
        <div>
            <Link to={`/category/${_id}`}>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body flex justify-between p-8 lg:p-10">
                        <div className='flex justify-start'>
                            <img className='w-1/4' src={logo} alt="" />
                            <h2 className="card-title text-white font-bold text-3xl md:2xl lg:text-3xl ml-3">{name}</h2>

                        </div>
                        <div className="card-actions justify-end">
                            {/* <Link to={`/category/${_id}`}> */}
                            <button className="btn btn-secondary md:text-md lg:text-xl text-white px-5 py-3"><FaArrowRight></FaArrowRight></button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Category;