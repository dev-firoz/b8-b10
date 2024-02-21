import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className=' text-center mb-10'>
            {/* <div className='mt-5 mx-auto absolute lg:max-w-[1200px] max-w-[1400px]'>
                <img className='w-fit w-[200px] items-center' src={` https://i.ibb.co/GpXHjN0/404.jpg`} alt="" />
            </div> */}
            <div className='hidden lg:block md:block pt-10'>
                <div className='mt-5 mx-auto lg:max-w-[1200px] max-w-[1400px]'>
                    <h1 className='text-5xl -mb-20 relative font-bold mt-3'>Oops!</h1>
                    <img className='w-fit w-[200px] items-center' src={` https://i.ibb.co/GpXHjN0/404.jpg`} alt="" />
                </div>
                <div className='relative md:-mt-36 lg:-mt-48'>
                    <p className='text-xl font-medium mt-3'>Status {error.status}</p>
                    <p className='text-xl font-medium mt-3'>{error.data}</p>
                    <p className='text-xl mb-5 font-medium mt-3'>
                        <i>Site {error.statusText || error.message}</i>
                    </p>
                </div>
                <div className=''>
                    <NavLink to="/"><button className='font-bold py-2 px-4 rounded-lg hover:bg-amber-400 bg-amber-500 text-white'>Back to Home</button></NavLink>
                </div>
            </div>
            <div className='lg:hidden md:hidden pt-10'>
                <div className='mt-5 mx-auto lg:max-w-[1200px] max-w-[1400px]'>
                    <h1 className='text-5xl relative -mb-10 font-bold mt-3'>Oops!</h1>
                    <img className='w-fit w-[200px] items-center' src={` https://i.ibb.co/GpXHjN0/404.jpg`} alt="" />
                </div>
                <div className='relative -mt-20'>
                    <p className='text-xl font-medium mt-3'>Status {error.status}</p>
                    <p className='text-xl font-medium mt-3'>{error.data}</p>
                    <p className='text-xl font-medium mt-3'>
                        <i>Site {error.statusText || error.message}</i>
                    </p>
                </div>
                <div className='relative'>
                    <NavLink to="/"><button className='font-bold py-2 px-4 rounded-lg hover:bg-amber-400 text-white bg-amber-500'>Back to Home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;