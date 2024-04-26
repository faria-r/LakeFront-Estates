import React from "react";

const FeaturedHomes = ({ home }) => {
  const { name, address, price, Homepicture } = home;
  return (
    <div className=" h-auto lg:h-[90vh] relative">
      <div>
        <img src={Homepicture} alt="" className="lg:h-[60vh] lg:w-[70vw]" />
      </div>
      <div className="bg-sky-900 py-16 text-white text-center  font-bold font-sans">
        <p className="text-2xl uppercase">{name}</p>
        <p className="uppercase"> {address}</p>
      </div>
      <div className="absolute top-0 right-0">
        {" "}
        <p className="bg-sky-900 px-16 py-2 text-white">FOR SALE</p>
      </div>
    </div>
  );
};

export default FeaturedHomes;
