import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BorrowedBookPage from './BorrowedBookPage';

const BorrowedBooks = () => {

    const loadBook = useLoaderData()
    const [books, setBooks] = useState(loadBook);

    return (
        <div className='grid lg:grid-cols-3 mt-10 md:grid-cols-2 max-w-6xl mx-auto gap-5'>
            {
                books?.map((book) => {
                    return <BorrowedBookPage key={book._id} books={books} setBooks={setBooks} book={book} />
                })
            }
        </div>
    );
};

export default BorrowedBooks;