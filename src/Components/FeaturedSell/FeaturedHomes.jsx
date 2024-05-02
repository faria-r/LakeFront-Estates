import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedHomes = ({ home }) => {
  AOS.init();

  const { name, address, price, Homepicture } = home;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className=" h-auto max-w-[90vw] lg:h-[90vh] relative"
    >
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
