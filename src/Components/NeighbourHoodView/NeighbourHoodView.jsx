import React from 'react';
import Button from '../ReUsable/Button/Button';

const NeighbourHoodView = ({view}) => {
    return (
        <div className='grid lg:grid-cols-2 gap-4 my-16 items-center w-[90vw] mx-auto'>
        <div>
            <img src="https://i.ibb.co/S76QYFs/Home17.jpg" alt="" />
        </div>
       
        <div className='lg:w-[30vw]'>
            <h1 className='my-6 text-4xl font-serif '>{view}</h1>
            <Button value={'EXPLORE'}></Button>
        </div>
       
    </div>
    );
};

export default NeighbourHoodView;