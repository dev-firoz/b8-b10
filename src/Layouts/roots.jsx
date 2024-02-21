import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className='font-openSans'>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;