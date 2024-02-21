import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleBookDetails from './SingleBookDetails';

const BooksDetail = () => {

    const [details, setDetails] = useState({})

    const { _id } = useParams()

    const book = useLoaderData();
    useEffect(() => {
        const findBook = book?.find(books => books._id === _id)
        setDetails(findBook)
    })


    return (
        <>
            <SingleBookDetails details={details} book={book} />
        </>
    );
};

export default BooksDetail;