import React from 'react';
import { NavLink } from 'react-router-dom';


const AllBookCategory = ({ categories }) => {

    const { category, imageUrl } = categories || {};

    return (
        <div>
            <div className='mt-10 bg-stone-300 bg-opacity-40 w-[250px] p-5 rounded-lg'>
                <img draggable="false" className='w-[200px] rounded-md h-[300px]' src={imageUrl} alt="" />
                <h1 className="text-2xl font-semibold text-center mt-2">{category}</h1>
                <NavLink className="mt-2 btn bg-warning text-white" to={`/book/${category}`}>Go to {category} book</NavLink>
            </div>
        </div>
    );
};

export default AllBookCategory;