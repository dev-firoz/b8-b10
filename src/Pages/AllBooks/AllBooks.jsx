import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBooksPages from './AllBooksPages';

const AllBooks = () => {

    const allBooks = useLoaderData()
    console.log(allBooks);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 max-w-6xl mx-auto gap-5'>
            {
                allBooks?.map((book) => {
                    return <AllBooksPages key={book._id} book={book} />
                })
            }
        </div>
    );
};

export default AllBooks;