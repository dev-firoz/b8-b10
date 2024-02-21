import React, { useContext } from 'react';
import { FaFacebook, FaPinterest, FaShare, FaTwitter } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';



const SingleBookDetails = ({ details }) => {

    const { user } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const { displayName, email } = user || {};

    const { _id, imageUrl, bookName, rating, category, qOfBook, authorName, sDescription } = details || {};


    const handleAddBorrowedBooks = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const date = form.get('date');

        console.log(date);

        const borrowBookId = { date, bookName, imageUrl, category }

        console.log(borrowBookId);

        fetch('https://assignment-category-0008-server.vercel.app/addBorrowedBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrowBookId)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Book Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Okey'
                    })
                }
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                swal("Already exits", "Please try another", "error")

            })
    }



    return (
        <div>
            <div className='h-screen'>
                <div className='lg:flex gap-5 mx-auto h-[500px]'>
                    <div className='md:min-w-2xl mx-auto'>
                        <img className='w-[300px] m-5 items-center justify-center' src={imageUrl} alt="" />
                        <div className='flex gap-5 mx-auto ml-20 md:min-w-2xl '>
                            <FaFacebook className='w-5 h-5'></FaFacebook>
                            <FaPinterest className='w-5 h-5'></FaPinterest>
                            <FaTwitter className='w-5 h-5'></FaTwitter>
                            <FaShare className='w-5 h-5'></FaShare>
                        </div>
                    </div>
                    <div className='mx-auto mt-10'>
                        <h1 className='text-2xl'>Book Name: <span className='font-bold'>{bookName}</span></h1>
                        <h1 className='text-2xl'>Quantity of the book: {qOfBook}</h1>
                        <h1 className='text-2xl'>Category: {category}</h1>
                    </div>
                    <div className='mt-10 max-w-xl mx-auto'>
                        <h1 className='font-semibold'>Short description</h1>
                        <p className='font-semibold'>{sDescription}</p>
                    </div>
                </div>
                <div className='flex gap-5 mx-10'>
                    <button className="btn w-1/2 text-white btn-warning" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                    <button className="btn w-1/2  btn-success">Read</button>
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Enter Book Returning date</h3>
                        <div className="modal-action">
                            <form onSubmit={handleAddBorrowedBooks} method="dialog">
                                {/* if there is a button in form, it will close the modal */}

                                <input type="date" name="date" required className="input input-bordered input-primary w-full max-w-xs mb-2" />
                                <button className="btn mt-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleBookDetails;