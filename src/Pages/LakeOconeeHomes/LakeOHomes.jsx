import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
import ImgsBanner from "../../Components/ReUsable/imgBanner/ImgsBanner";
import useAxios from "../../Hooks/useAxios";
import useFindHome from "../../Hooks/useFindHome";
const LakeOHomes = () => {
// const {data,loading,error,getHomes} = useAxios();

// if(loading){
//   return <p>Loading</p>
// }
// if(error){
//   return <p>error:{error.message}</p>
// }
const {findHomes} = useFindHome('raynoldes lake oconee')
  return (
    <div>
      <ImgsBanner></ImgsBanner>
      <div className="grid grid-cols-2">

        { findHomes &&
        findHomes.map((home) => (
          <HomeCard key={home._id} home={home}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default LakeOHomes;
