import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Category = ({ category }) => {
    const { name, image } = category;
    return (
        <div className="card bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body flex justify-between p-8 lg:p-10">
                <div className=''>
                    <h2 className="card-title text-white font-bold text-xl md:2xl lg:text-3xl ml-3">{name}</h2>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary md:text-md lg:text-xl text-white px-5 py-3"><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Category;