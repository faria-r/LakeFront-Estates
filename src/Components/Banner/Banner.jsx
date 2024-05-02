import React from "react";
import bgVideo from "../../assets/estate.mp4";
import black from "../../assets/black.jpg";
import Navber from "../../Shared/Navber/Navber";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  AOS.init();
  return (
    <div className="bg-black mx-auto">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        poster={black}
        className="h-[100vh] w-[100%] object-cover opacity-[0.7]"
      ></video>
      <div data-aos="fade-left" data-aos-duration="2000" className="w-[90%]  text-white  text-center absolute top-[32%] left-0 right-0 mx-auto">
        <h2 className="  my-4 text-[30px] lg:text-[70px]  font-semibold font-mono">
          Lakefront Real Estate
        </h2>
        <div className="border-b-2 border-b-gray-400 w-[25vw] mx-auto"></div>
        <p className="my-4">LAKE OCONEE'S TOP LUXURY REALTOR FOR 23 YEARS</p>
        <div className="lg:flex justify-evenly items-center gap-4 mt-12 mb-4  font-serif text-xl w-[50vw] mx-auto">
          <div className="sm:mb-8 lg:mb-0">
            <button className="border-b-2  hover:border-b-black">
              Featured Properties
            </button>
          </div>
          <div>
            <button className="border-b-2 hover:border-b-black">
              Past Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
