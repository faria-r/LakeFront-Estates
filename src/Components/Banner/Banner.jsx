import React from 'react';
import bgVideo from '../../assets/estate.mp4'
import black from '../../assets/black.jpg'
import Navber from '../../Shared/Navber/Navber';
const Banner = () => {
    return (
        <div className='bg-black '>
           <video src={bgVideo} autoPlay loop muted poster={black} className='h-[100vh] w-[100%] object-cover opacity-[0.7]'></video>
          <div className='w-[60vw]  absolute top-1/2   mx-auto'>
<h2 className='text-white text-5xl font-semibold font-serif'>Lakefront estates</h2>
          </div>
        </div>
    );
};

export default Banner;