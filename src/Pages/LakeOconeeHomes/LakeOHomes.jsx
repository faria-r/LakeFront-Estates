import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
import ImgsBanner from "../../Components/ReUsable/imgBanner/ImgsBanner";
import useAxios from "../../Hooks/useAxios";
const LakeOHomes = () => {
const {data,loading,error,getHomes} = useAxios();
if(loading){
  return <p>Loading</p>
}
if(error){
  return <p>error:{error.message}</p>
}
  return (
    <div>
      <ImgsBanner></ImgsBanner>
      <div className="grid grid-cols-2">

        { data &&
        data.map((home) => (
          <HomeCard key={home._id} home={home}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default LakeOHomes;
