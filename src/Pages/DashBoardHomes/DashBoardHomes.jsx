import React from 'react';
import useFindHome from '../../Hooks/useFindHome';

const DashBoardHomes = () => {
    const[ homes] = useFindHome()
    return (
        <div className='text-black w-auto'>
<div className='grid lg:grid-cols-3 gap-4 mt-4'>
{
    homes.map(home => <div key={home._id} home={home} className="border lg:mx-12 mb-8 w-[20vw]  lg:h-[35vh] relative shadow-xl">
    <div>
      <img src={home.Homepicture} alt="" className="lg:h-[20vh] lg:w-[20vw]" />
    </div>
    <div className=" py-2  text-center  font-bold font-sans">
      <p className=" uppercase">{home.name}</p>
      <p className="uppercase">{home.type}</p>
    </div>
    <div className="absolute top-0 right-0">
      {" "}
      <p className="bg-sky-900 px-2 py-[2px] text-xs text-white">FOR SALE</p>
    </div>
    <div className="absolute top-0 left-0">
      {" "}
      <p className="bg-sky-900 px-2 py-[2px] text-xs text-white">${home.price}</p>
    </div>
  </div> )
}
</div>

            
        </div>
    );
};

export default DashBoardHomes;