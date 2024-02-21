import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Books from './Books';

const BooksOfCategory = () => {

    const booksOfType = useLoaderData()

    const { category } = useParams()

    const [book, setBook] = useState([]);

    useEffect(() => {
        const books = booksOfType?.filter(book => book.category == category)
        setBook(books);
    }, [booksOfType])


    return (
        <div>
            <div className='grid lg:grid-cols-3 max-w-6xl mx-auto gap-5'>
                {
                    book?.map((book) => {
                        return <Books key={book._id} book={book}></Books>
                    })
                }
            </div>
        </div>
    );
};

export default BooksOfCategory;