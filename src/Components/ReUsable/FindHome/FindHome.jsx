import React from "react";
import { Link } from "react-router-dom";
// import bgImg from
const FindHome = ({ imgLinks, tittle }) => {
  return (
    <div className="w-[30vw] h-[50vh] relative">
      <Link>
        <img src={imgLinks} alt="" className="w-[100%] h-[100%] " />
        <div className=" w-[20vw] mx-auto absolute top-[70%] left-0 right-0">
          <h2 className="text-3xl font-serif text-center text-white mb-4">{tittle}</h2>
          <div className="border-b-2 border-b-gray-400 w-[20vw] mx-auto"></div>
        </div>
      </Link>
    </div>
  );
};

export default FindHome;
