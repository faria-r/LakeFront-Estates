import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
import ImgsBanner from "../../Components/ReUsable/imgBanner/ImgsBanner";
import useAxios from "../../Hooks/useAxios";
import useFindHome from "../../Hooks/useFindHome";
import { useLoaderData } from "react-router-dom";
const LakeOHomes = () => {
  const findHomes = useLoaderData();

  return (
    <div>
      <ImgsBanner></ImgsBanner>
      <div className="grid grid-cols-2">
        {findHomes &&
          findHomes.map((home) => (
            <HomeCard key={home._id} home={home}></HomeCard>
          ))}
      </div>
    </div>
  );
};

export default LakeOHomes;
