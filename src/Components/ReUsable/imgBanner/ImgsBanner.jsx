import React from 'react';

const ImgsBanner = ({img,name}) => {
    return (
        <div className="bg-black ">
        <img src={img} alt=""  className="h-[100vh] w-[100%] object-cover opacity-[0.5]" />
          <div className="w-[90%]  text-white  text-center absolute top-[25%] left-0 right-0 mx-auto">
            <h2 className="  my-4 text-[30px] lg:text-[60px]  font-semibold font-mono"> {name} for Sale | Faria Rahman
            </h2>
            <div className="border-b-2 mt-6 mb-8 border-b-gray-400 w-[25vw] mx-auto"></div>
            <p className="my-4 w-3/4 mx-auto">Discover an array of {name} for sale, guided by the expertise. Whether you seek serene waterfront living or a vacation escape, our listings offer diverse options. Connect with Faria to gain insights, schedule condo viewings, or request further details. Your journey to owning a Lake Oconee condo starts here.</p>
          
          </div>
        </div>
    );
};

export default ImgsBanner;