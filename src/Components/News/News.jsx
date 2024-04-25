import React from 'react';
import Button from '../ReUsable/Button/Button';

const News = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-4 my-16 items-center w-[90vw] mx-auto'>
            <div className='lg:w-[30vw]'>
                <h1 className='my-6 text-4xl font-serif '>In The News</h1>
                <p className='mb-8 gap-2 text-xl'>We are excited to let the world know about everything we are up-to in both real estate and lifestyle. Catch us in the local news or in some of our favorite publications.</p>

                <Button value={'View More'}></Button>
            </div>
            <div>
                <img src="https://i.ibb.co/S76QYFs/Home17.jpg" alt="" />
            </div>
        </div>
    );
};

export default News;