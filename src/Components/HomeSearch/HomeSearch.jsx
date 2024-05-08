import React from "react";
import FindHome from "../ReUsable/FindHome/FindHome";
import { Link } from "react-router-dom";

const HomeSearch = () => {
  return (
    <div className="w-[90vw]  mx-auto lg:flex justify-evenly items-center gap-3 mb-24 flex-wrap">
      <FindHome
        imgLinks={"https://i.ibb.co/FmF4PHs/lkeH.jpg"}
        tittle={"Home Search"}
      ></FindHome>
      <FindHome
        imgLinks={"https://i.ibb.co/jwJWFZf/one.jpg"}
        tittle={"Home Valuation"}
      ></FindHome>
      <Link to="/contact">
        {" "}
        <FindHome
          imgLinks={"https://i.ibb.co/wKwyLw1/riezl-baker.jpg"}
          tittle={`Let's Connect`}
        ></FindHome>
      </Link>
    </div>
  );
};

export default HomeSearch;
