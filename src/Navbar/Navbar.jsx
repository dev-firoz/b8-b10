import { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const { displayName, photoURL } = user || {};

    const location = useLocation();
    const navigate = useNavigate();

    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure to Logout?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'You are now logged out.',
                        'success'
                    )
                        .then(result => {
                            logOut()
                            navigate(location?.state ? location.state : "/")
                        })
                }
            },)
            .catch(error => {
                swal("logout failed", "please try again", "warning")
            })
    }

    const navLinks = (
        <>
            <span className='space-x-2'>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'btn btn-secondary btn-sm text-white text-xs text-opacity-80' : 'btn btn-ghost text-xs btn-sm'}>Home
                </NavLink>
                <NavLink to="/addBook" className={({ isActive }) =>
                    isActive ? 'btn btn-secondary btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>Add Book
                </NavLink>
                <NavLink to="/allBooks" className={({ isActive }) =>
                    isActive ? 'btn btn-secondary btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>All Book
                </NavLink>
                <NavLink to="/borrowedBooks" className={({ isActive }) =>
                    isActive ? 'btn btn-secondary btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>Borrowed Books
                </NavLink>
            </span>
        </>
    )
    return (
        <div className="navbar">
            <div className='drawer'>
                <div className="dropdown">
                    <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <NavLink to="/" className="items-center gap-2 text-xl flex justify-center text-center w-full">
                    <img className='w-12' src="https://i.ibb.co/2c5GNCs/pngegg.png" alt="image error" /> Library Management System</NavLink>
            </div>
            {/*drawer-container*/}
            <div className="drawer">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}

                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? 'btn btn-secondary btn-sm text-white text-xs text-opacity-80' : 'btn btn-ghost text-xs btn-sm'}>Home
                        </NavLink>
                        <NavLink to="/addBook" className={({ isActive }) =>
                            isActive ? 'btn btn-secondary btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>Add Book
                        </NavLink>
                        <NavLink to="/allBooks" className={({ isActive }) =>
                            isActive ? 'btn btn-secondary btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>All Book
                        </NavLink>
                        <NavLink to="/borrowedBooks" className={({ isActive }) =>
                            isActive ? 'btn btn-secondary btn-sm text-white text-xs text-opacity-80' : 'btn text-xs btn-ghost btn-sm'}>Borrowed Books
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            {
                user ? <button onClick={handleSignOut} className="btn btn-sm btn-ghost ml-1 text-xs">Sign Out</button>
                    :
                    <Link to='/login'><button className="btn btn-sm btn-ghost text-xs">Login</button></Link>
            }
            {
                user ?
                    <div  className=" text-red-500 ml-2 hover:bg-none bg-none  btn ">
                        <span>{displayName}</span>
                    </div> : ''
            }
            {
                user ?
                    <div className="avatar ml-2 items-center justify-center text-center ">
                        <div className="w-full  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='' src={photoURL} />
                        </div>
                    </div> : ''
            }
        </div >
    );
};

export default Navbar;