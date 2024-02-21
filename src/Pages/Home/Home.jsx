import React from 'react';
import { useLoaderData } from "react-router-dom";
import AllBookCategory from "./AllBookCategory";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {

    const homeCategory = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='h-screen'>
                <h1 className='text-center font-bold text-3xl text-gray-400'>Our Book Collection</h1>
                <div className='lg:flex lg:flex-wrap mx-auto lg:ml-64 gap-2 lg:max-w-[1415px]  md:gap-10 md:flex md:flex-wrap md:ml-32 ml-44'>

                    {
                        homeCategory?.map((category) => {
                            return <AllBookCategory key={category._id} categories={category} />
                        })
                    }
                </div>
                <h1 className="mt-40 text-center font-bold text-2xl">  Comming Soon</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;