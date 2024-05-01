import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ImgsBanner from "../../Components/ReUsable/imgBanner/ImgsBanner";
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub, GiSelfLove } from "react-icons/gi";
import { FaChartArea } from "react-icons/fa6";
import { FaExpandArrowsAlt } from "react-icons/fa";
import Schedule from "../../Components/ReUsable/Schedule/Schedule";
import Button from "../../Components/ReUsable/Button/Button";
import ContactAgent from "../../Components/ContactAgent/ContactAgent";
import Features from "../../Components/Features&Amenitis/Features";
import NeighbourHoodView from "../../Components/NeighbourHoodView/NeighbourHoodView";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const DetailedHomeInfo = () => {
  const {user}= useContext(AuthContext);
  const axiosPublic = useAxiosPublic()
  const [active,setActive] = useState(false)
  const data = useLoaderData();
  const homeInfo = data[0];
  const interior = homeInfo.interior[0];
  const exterior = homeInfo.exterior[0];
  const { bed, bath, living, acres, flooring, appliances, others } = interior;
  const { pool, roof, heat, sewer, garage, stories } = exterior;
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
  const handleChangeStyle = (id)=>{
    setActive(true);
    console.log(id)
    const favouritesInfo = {
      homeName:name,
      userEmail:user?.email,
      homeID:id,
      homeImg:Homepicture,
      price:price
    }
    axiosPublic.post('/favourites',favouritesInfo)
    .then(res=>{
    console.log(res.data.insertedId);
    if(res.data.insertedId){
      Swal.fire({
        title: "Congrats",
        text: "Added to Favourites!",
        icon: "success",
      });
    }
    else{
Swal.fire({
  icon: "error",
  title: "OOps!",
  text: "This Home is Booked Already",
});
    }
   
   
    })
    
  }
  return (
    <div>
      <ImgsBanner img={Homepicture} name={name}></ImgsBanner>
      <div className="mt-8 border-t-[1px] border-t-slate-50 px-16  relative">
        <div className="absolute top-0 left-16">
          {" "}
          <p className="bg-sky-900 px-16 py-2 text-white">FOR SALE</p>
        </div>
        <div className="absolute top-0 lg:right-[29%]">
          {" "}
          <button  style={{
          backgroundColor: active ? 'white' : 'white',
          color: active ? 'red' : 'blue',
        }} onClick={()=>handleChangeStyle(_id)} className="text-4xl text-sky-950"><GiSelfLove /></button>
        </div>
     
        <h2 className="uppercase text-3xl font-mono mt-12">{name}</h2>
        <h2 className="uppercase text-xl font-mono my-2 pb-8">{address}</h2>
      </div>

      <div className="w-[70vw]  border-b-[1px] border-b-black"></div>

      <div className="lg:w-[90vw] mx-auto p-6">
        <p className="text-2xl font-mono font-bold">$ {price}</p>

        <div className="lg:flex">
          <div className="border-r-[1px] border-r-black lg:w-[85vw] mx-auto lg:pr-16 py-6 text-xl font-mono text-justify">
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
              <div className="font-bold font-serif">
                <p>
                  {living} <br /> AREA
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

      <div className="grid w-[90vw] mx-auto sm:grid-cols-1 lg:grid-cols-2  my-16 justify-between items-center h-auto">
        <div>
          {" "}
          <img src={neighbourhoodIMG} alt="" />
        </div>
        <div>
          {" "}
          <Schedule></Schedule>
        </div>
      </div>

      <ContactAgent></ContactAgent>
      <div className="my-16">
        <Features interior={interior} exterior={exterior}></Features>
      </div>
      <div className="my-8">
        <NeighbourHoodView view={name}></NeighbourHoodView>
      </div>
    </div>
  );
};

export default DetailedHomeInfo;
