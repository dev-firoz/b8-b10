import React from 'react';
import { Link } from 'react-router-dom';

const AllBooksPages = ({ book }) => {

    const { _id, imageUrl, bookName, rating, category, qOfBook, authorName } = book || {};

    return (
        <div>
            <div className='bg-slate-100 lg:w-[340px] md:w-[300px] mx-auto w-[320px] md:h-[720px] h-[720px] p-5 rounded-lg'>
                <img className='w-[300px] rounded-md h-[450px]' src={imageUrl} alt="" />
                <h1 className="text-xl font-bold mt-2">{bookName}</h1>
                <p className="text-xl mt-1 font-medium">Quantity: {qOfBook}</p>
                <p className="text-xl mt-1 font-medium">Author: <span className='text-blue-500 font-semibold'>{authorName}</span></p>
                <p className="text-xl mt-1 font-medium">Category: {category}</p>
                <p className="text-lg mt-1 font-medium">Ratings: <span className='font-medium'>{rating}</span></p>
                <Link to={`/updateBook/${_id}`} className="btn btn-secondary mt-3 mx-auto ml-24 absolute">Update</Link>
            </div>
        </div>
    );
};

export default AllBooksPages;