import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className='flex justify-center items-center mt-4 gap-2'>
            <div className='p-4 relative rounded-[50%] border-[1px] border-indigo-900 w-8 h-8 text-center'><a target='_blank' href="https://www.facebook.com/Faria.FSBR"><FaFacebook className='text-center text-xl absolute top-[15%] left-0 right-0 w-8 mx-auto' /></a></div>
            <div className='p-4 relative rounded-[50%] border-[1px] border-indigo-900 w-8 h-8 text-center'><a target='_blank' href="https://www.linkedin.com/in/faria-r/"><FaLinkedin className='text-center text-xl absolute top-[15%] left-0 right-0 w-8 mx-auto' /></a></div>
            <div className='p-4 relative rounded-[50%] border-[1px] border-indigo-900 w-8 h-8 text-center'><a target='_blank' href="https://twitter.com/FariaR20"><AiFillTwitterCircle className='text-center text-xl absolute top-[15%] left-0 right-0 w-8 mx-auto' /></a></div>
        </div>
    );
};

export default SocialLinks;