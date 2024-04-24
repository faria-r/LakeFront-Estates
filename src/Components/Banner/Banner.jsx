import React from "react";
import bgVideo from "../../assets/estate.mp4";
import black from "../../assets/black.jpg";
import Navber from "../../Shared/Navber/Navber";
const Banner = () => {
  return (
    <div className="bg-black ">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        poster={black}
        className="h-[100vh] w-[100%] object-cover opacity-[0.7]"
      ></video>
      <div className="w-[90%]  text-white  text-center absolute top-[32%] left-0 right-0 mx-auto">
        <h2 className="  my-4 text-[70px]  font-semibold font-mono">
          Lakefront Real Estate
        </h2>
        <div className="border-b-2 border-b-gray-400 w-[25vw] mx-auto"></div>
        <p className="my-4">LAKE OCONEE'S TOP LUXURY REALTOR FOR 23 YEARS</p>
        <div className="flex justify-evenly items-center gap-4 mt-12 mb-4  font-serif text-xl w-[50vw] mx-auto">
          <div>
            <button className="border-b-2 hover:border-b-black">
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
