import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
import ImgsBanner from "../../Components/ReUsable/imgBanner/ImgsBanner";
import { useLoaderData } from "react-router-dom";
const LakeOHomes = () => {
  const findHomes = useLoaderData();
const takeName =findHomes[0];
const homeName = takeName.name.toUpperCase();
console.log(homeName)
  return (
    <div>
      <ImgsBanner name={homeName} ></ImgsBanner>
      <div className=" w-[90vw] grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 my-16">
        {findHomes &&
          findHomes.map((home) => (
            <HomeCard key={home._id} home={home}></HomeCard>
          ))}
      </div>
    </div>
  );
};

export default LakeOHomes;
