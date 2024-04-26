import React from "react";
import { useLoaderData } from "react-router-dom";
import ImgsBanner from "../../Components/ReUsable/imgBanner/ImgsBanner";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { FaChartArea } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";

const DetailedHomeInfo = () => {
  const data = useLoaderData();
  const homeInfo = data[0];
  const interior = homeInfo.interior[0];
  const { bed, bath, living, acres } = interior;
  const {
    name,
    _id,
    salesStatus,
    price,
    Homepicture,
    registrationID,
    type,
    neighbourhood,
    neighbourhoodIMG,
    categoryname,
    address,
    details,
  } = homeInfo;
  return (
    <div>
      <ImgsBanner img={Homepicture} name={name}></ImgsBanner>
      <div className="mt-8 border-t-[1px] border-t-slate-50 px-16  relative">
        <div className="absolute top-0 left-16">
          {" "}
          <p className="bg-sky-900 px-16 py-2 text-white">FOR SALE</p>
        </div>
        <h2 className="uppercase text-3xl font-mono mt-12">{name}</h2>
        <h2 className="uppercase text-xl font-mono my-2 pb-8">{address}</h2>
      </div>
      <div className="w-[70vw]  border-b-[1px] border-b-black"></div>
      <div className="w-[90vw] mx-auto p-6">
        <p className="text-2xl font-mono font-bold">$ {price}</p>

        <div className="lg:flex">
          <div className="border-r-[1px] border-r-black w-[60vw] pr-16 py-6 text-xl font-mono text-justify">
            <p className="my-4">{details}</p>
          </div>
          <div className="w-[30vw] mx-auto text-center">
            <div className=" w-[10vw] my-6 mx-auto flex justify-between  items-center">
              <div className="text-3xl mr-4">
                <IoBedOutline />
              </div>
              <div className="font-bold font-serif">
                <p>
                  {bed} <br /> BED
                </p>
              </div>
            </div>
            <div className=" w-[10vw] my-6 mx-auto flex justify-between  items-center">
              <div className="text-3xl">
              <GiBathtub />
              </div>
              <div className="font-bold font-serif">
                <p>
                  {bath} <br /> BATHS
                </p>
              </div>
            </div>
            <div className=" w-[10vw] my-6 mx-auto flex justify-between  items-center">
              <div className="text-3xl">
              <FaChartArea />
              </div>
              <div  className="font-bold font-serif">
                <p>
                  {living} <br />  AREA
                </p>
              </div>
            </div>
            <div className=" w-[10vw] my-6 mx-auto flex justify-between  items-center">
              <div className="text-3xl">
              <FaExpandArrowsAlt />
              </div>
              <div className="font-bold font-serif">
                <p>
                  {acres} <br /> ACRES
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedHomeInfo;
