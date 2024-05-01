import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Achivement = () => {
    AOS.init();
    return (
        <div className='w-[90vw] mx-auto my-8  lg:flex lg:justify-evenly items-center gap-3'>
            <div data-aos="fade-up"
     data-aos-duration="1000" className='text-center  font-serif lg:w-[25vw]'>
                <h1 className='text-4xl my-4'>2023</h1>
                <p>Top Producer, Over $102 Million in Sales Volume</p>
            </div>
            <div data-aos="fade-up"
     data-aos-duration="2000" className='text-center font-serif lg:w-[25vw]'>
                <h1 className='text-4xl my-4'>2022</h1>
                <p>Top Producer, Over $131 Million in Sales Volume</p>
            </div>
            <div data-aos="fade-up"
     data-aos-duration="3000"  className='text-center font-serif lg:w-[25vw]'>
                <h1 className='text-4xl my-4'>2021</h1>
                <p>Top Producer, Over $117 Million in Sales Volume</p>
            </div>
        </div>
    );
};

export default Achivement;