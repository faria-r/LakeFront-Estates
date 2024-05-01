import React from "react";
import { Link } from "react-router-dom";
// import bgImg from
import AOS from 'aos';
import 'aos/dist/aos.css';
const FindHome = ({ imgLinks, tittle }) => {
  AOS.init();
  return (
    <div data-aos="fade-up"
    data-aos-duration="2000" className="mb-8 sm:w-3/4 mx-auto lg:w-[28vw] lg:h-[50vh] relative">
      <Link>
        <img src={imgLinks} alt="" className="w-[100%] h-[100%] " />
        <div className=" lg:w-[20vw] mx-auto absolute top-[70%] left-0 right-0">
          <h2 className="text-3xl font-serif text-center text-white mb-4">{tittle}</h2>
          <div className="border-b-2 border-b-gray-400 w-1/2 lg:w-[20vw] mx-auto"></div>
        </div>
      </Link>
    </div>
  );
};

export default FindHome;
