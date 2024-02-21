import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddBook = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleAddBook = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const imageUrl = form.get('imageUrl');
        const bookName = form.get('bookName');
        const qOfBook = form.get('qOfBook');
        const authorName = form.get('authorName');
        const category = form.get('category');
        const rating = form.get('rating');
        const sDescription = form.get('sDescription');
        const newBook = { imageUrl, bookName, qOfBook, authorName, category, rating, sDescription }
        console.log(newBook);

        fetch('https://assignment-category-0008-server.vercel.app/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Book added successfully',
                        icon: 'success',
                        confirmButtonText: 'Okey'
                    })
                }
                navigate(location?.state ? location.state : "/");
            })
    }



    return (
        <div>
            <div className='bg-[#F4F3F0] p-10 lg:max-w-4xl md:max-w-[700px] max-w-[400px] mb-5 mx-auto rounded-lg mt-5'>

                <form onSubmit={handleAddBook}>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='imageUrl' placeholder="imageurl@example.com" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text ">Book Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='bookName' placeholder="Book Name" className="input input-bordered w-full " required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text">Quantity of the book</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='qOfBook' placeholder="Book Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text ">Author Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='authorName' placeholder="author Name" className="input input-bordered w-full " required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text ">Short description
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sDescription' placeholder="your description here" className="input input-bordered w-full " required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text ">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' placeholder="ratings" className="input input-bordered w-full " required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <select required name='category' className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Chose Your Category</option>
                            <option>Novel</option>
                            <option>Thriller</option>
                            <option>History</option>
                            <option>Drama</option>
                            <option>Sci-Fi</option>
                        </select>
                    </div>
                    <div className='mx-auto w-2/3'>
                        <input type="submit" value="Add Book" className="btn btn-secondary btn-block" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;