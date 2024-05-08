import React from 'react';
import Button from '../ReUsable/Button/Button';

const NeighbourHoodView = ({view}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-16 items-center w-[90vw] mx-auto'>
        <div className='relative  h-[90vh] p-8'>
            <div className='bg-gray-800 w-[60vw] lg:w-[30vw] lg:h-[80vh] '></div>
           <div className='absolute top-[16%] bottom-[10%] h-[75vh] my-auto left-[10%]'> <img src="https://i.ibb.co/S76QYFs/Home17.jpg" alt="" /></div>
        </div>
       
        <div className='lg:w-[30vw] text-center lg:text-start mx-auto'>
            <h1 className='my-6 text-2xl lg:text-4xl font-serif uppercase '>{view}</h1>
            <Button value={'EXPLORE'}></Button>
        </div>
       
    </div>
    );
};

export default NeighbourHoodView;