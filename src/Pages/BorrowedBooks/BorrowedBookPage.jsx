import React from 'react';
import Swal from 'sweetalert2';

const BorrowedBookPage = ({ book, books, setBooks }) => {

    const { _id, imageUrl, bookName, category, date } = book || {};

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-category-0008-server.vercel.app/addBorrowedBook/${_id}`, {
                    method: "delete",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = books.filter(pro => pro._id !== _id);
                            setBooks(remaining);
                        }
                    })
            }
        })

    };

    return (
        <div className='bg-slate-100 lg:w-[340px] md:w-[300px] mx-auto w-[320px] md:h-[680px] h-[720px] p-5 rounded-lg'>
            <img className='w-[300px] rounded-md h-[450px]' src={imageUrl} alt="" />
            <h1 className="text-xl font-bold mt-2">Name {bookName}</h1>
            <p className="text-xl mt-1 font-medium">Category: {category}</p>
            <p className="text-xl mt-1 font-medium">Return date: {date}</p>
            <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-success mt-3 mx-auto ml-24 absolute">Return date</button>
            {/* <Link to={`/book/${category}/${_id}`} className="btn btn-secondary mt-3 mx-auto ml-24 absolute">Details</Link> */}
        </div>
    );
};

export default BorrowedBookPage;