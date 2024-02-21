import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-[1415px] mx-auto rounded-lg mt-10 mb-5'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={`https://i.ibb.co/DWLZVC9/Banner-1.jpg`} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide8" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={`https://i.ibb.co/94bf8NT/Banner-3.jpg`} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={`https://i.ibb.co/XpkNq1b/Banner-4.jpg`} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={`https://i.ibb.co/0C6ZBXN/Banner-5.jpg`} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={`https://i.ibb.co/fYv728p/Banner-2.jpg`} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={`https://i.ibb.co/8PB678P/Banner-6.jpg`} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide7" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" className="carousel-item relative w-full">
                    <img src={`https://i.ibb.co/2S7mQnn/Banner-7.jpg`} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide8" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" className="carousel-item relative w-full">
                    <img src={`https://i.ibb.co/Rg2MN7m/Banner-8.jpg`} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide7" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;