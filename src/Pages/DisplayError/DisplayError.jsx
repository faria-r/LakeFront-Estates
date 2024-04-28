import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const errors = useRouteError();
    return (
        <div className='h-[100vh] bg-sky-950'>
            <h2 className='text-center text-white text-5xl p-8'><IoHomeOutline /> Error Happened: </h2>
            <h3 className='text-center text-3xl py-36  text-white'><br /> {errors.statusText || errors.message}</h3>
        </div>
    );
};

export default DisplayError;