import React from 'react';
import bgVideo from '../../assets/estate.mp4'
import black from '../../assets/black.jpg'
import Navber from '../../Shared/Navber/Navber';
const Banner = () => {
    return (
        <div>
           <video src={bgVideo} autoPlay loop muted poster={black} className='h-[100vh] w-[100%] object-cover'></video>
          
        </div>
    );
};

export default Banner;