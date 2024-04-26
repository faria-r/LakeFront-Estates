import React from "react";
import Button from "../ReUsable/Button/Button";
import useAxios from "../../Hooks/useAxios";
import FeaturedHomes from "./FeaturedHomes";
import { Link } from "react-router-dom";

const FeaturedForSell = () => {
  const {data} = useAxios('homeList');
  const filteredData = data.slice(13,15);
  console.log(filteredData.length)
  return (
    <div className="w-[90vw] mx-auto text-center">
      <h2 className="text-5xl font-serif pt-36 pb-12">
        Lake Oconee Real Estate for Sale
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 h-auto p-8 mb-8">
      {
        filteredData && 
        filteredData.map( home => <FeaturedHomes home={home} key={home._id}></FeaturedHomes> )
      }

      
      </div>
      <Link to='/featuredHomes'> <Button value={"View All"}></Button>
      </Link>
     
    </div>
  );
};

export default FeaturedForSell;
