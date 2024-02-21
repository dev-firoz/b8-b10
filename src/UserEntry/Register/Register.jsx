import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from './../../Providers/AuthProvider/AuthProvider';
import swal from 'sweetalert';
import { getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';


const auth = getAuth(app);
const Register = () => {


    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const url = form.get('url');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, url, email, password);

        createUser(email, password)
            .then(result => {
                swal("success", "You are now successfully Register in our Library", "success");
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                swal("Login failed", "Please try again", "error")
            })
    }


    const { signIn, googleProvider, githubProvider } = useContext(AuthContext);

    const [photo, setPhoto] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider, githubProvider)
            .then((result) => {
                const loggedInUser = result.user;
                swal("success", "You are now Google logged in successfully", "success");
                navigate(location?.state ? location.state : "/");
                setPhoto(loggedInUser)

            })
            .catch((error) => {
                swal("Login failed", "Please try again", "error")


            })
    };

    return (
        <div className='min-h-screen' style={{ backgroundImage: `url('https://i.ibb.co/G33ZKrq/Library-Books1.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center,center", backgroundAttachment: 'fixed' }}>
            <div className='pt-20'>
                <div className="card mx-auto  flex-shrink-0 w-full lg:max-w-2xl p-2 max-w-sm bg-opacity-40 bg-green-700">
                    <h1 className="text-3xl mt-20 text-center font-semibold mb-3 text-white">Welcome To Library Management System</h1>
                    <h1 className="text-2xl font-medium text-center mb-3 text-white">Please Sign Up </h1>
                    <div className='card-body'>
                        <form onSubmit={handleRegister} className='p-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-2xl">Name</span>
                                </label>
                                <input type="Text" name='name' placeholder="Full Name" className="input input-bordered border-red-50 bg-opacity-10 text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-2xl"> User image url</span>
                                </label>
                                <input type="Text" name='url' placeholder="example.com" className="input input-bordered border-red-50 bg-opacity-10 text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-2xl">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered border-red-50 bg-opacity-10 text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-2xl">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered border-red-50 bg-opacity-0 text-white" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-ghost text-white hover:text-blue-200 bg-red-400 hover:bg-red-500">Register</button>
                            </div>
                        </form>
                    </div>
                    <p className='text-center text-gray-50'>already have an account <Link to='/login' className='font-medium text-blue-600 link-hover'>Login</Link></p>
                    <div className='text-center mb-5 mt-5'>
                        <button onClick={handleGoogleSignIn} className="btn bg-amber-500 border-0 text-white"><NavLink to=""><span className='flex gap-1'>Log in with Google <FaGoogle></FaGoogle></span></NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;