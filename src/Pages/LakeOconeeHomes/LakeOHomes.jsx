import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
import ImgsBanner from "../../Components/ReUsable/imgBanner/ImgsBanner";
import { useLoaderData } from "react-router-dom";
const LakeOHomes = () => {
  const findHomes = useLoaderData();
  const takeName = findHomes[0];
  const homeName = takeName.name.toUpperCase();
  //for filtering data
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  //function for filtering
  const filteredHomes = findHomes.filter(
    (home) =>
      home.type.toLowerCase().includes(nameFilter.toLocaleLowerCase()) &&
      (priceFilter === "" || home.price <= parseFloat(priceFilter))
  );
  return (
    <div>
      <ImgsBanner name={homeName}></ImgsBanner>
<h2 className="text-center lg:text-[45px] font-mono mt-24">{homeName} Real Estates Listings</h2>
      {/* //filter Components */}
      <div className="w-[90vw] mx-auto my-6">
      <input
          type="text"
          className="w-full border-b-[1px] mx-auto mr-6 p-4"
          placeholder="Filter by Home Type- Residential/commercial"
          value={nameFilter} 
          onChange={(e) => setNameFilter(e.target.value)}
        /> 
      </div>
      <div className="mt-8 lg:flex justify-evenly items-center w-[80vw] mx-auto p-4">
       
        <input
          type="number"
          className="w-52 border-b-[1px]"
          placeholder="MAXIMUM PRICE"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
      </div>
      <div className=" w-[90vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 my-16">
        {filteredHomes.map((home) => (
          <HomeCard key={home._id} home={home}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default LakeOHomes;
