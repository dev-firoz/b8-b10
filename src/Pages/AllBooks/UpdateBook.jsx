import React from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const UpdateBook = () => {

    const book = useLoaderData()
    const { _id, imageUrl, bookName, category, authorName, rating } = book || {};

    const location = useLocation();
    const navigate = useNavigate();

    const handleUpdateBook = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const imageUrl = form.get('imageUrl');
        const bookName = form.get('bookName');
        const authorName = form.get('authorName');
        const category = form.get('category');
        const rating = form.get('rating');
        const updateBook = { imageUrl, bookName, authorName, category, rating,}
        console.log(updateBook);

        fetch(`https://assignment-category-0008-server.vercel.app/books/${_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Book Updated successfully',
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

                <form onSubmit={handleUpdateBook}>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='imageUrl' defaultValue={imageUrl} placeholder="imageurl@example.com" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text ">Book Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='bookName' defaultValue={bookName} placeholder="Book Name" className="input input-bordered w-full " required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text ">Author Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='authorName' defaultValue={authorName} placeholder="author Name" className="input input-bordered w-full " required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <label className="label">
                            <span className="label-text ">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' defaultValue={rating} placeholder="ratings" className="input input-bordered w-full " required />
                        </label>
                    </div>
                    <div className="form-control md:w-2/3 mx-auto mb-3">
                        <select required name='category' defaultValue={category} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Chose Your Category</option>
                            <option>Novel</option>
                            <option>Thriller</option>
                            <option>History</option>
                            <option>Drama</option>
                            <option>Sci-Fi</option>
                        </select>
                    </div>
                    <div className='mx-auto w-2/3'>
                        <input type="submit" value="Update" className="btn btn-secondary btn-block" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;