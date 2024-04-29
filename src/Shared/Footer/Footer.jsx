import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  MdHomeWork,
  MdOutlineMailOutline,
  MdRealEstateAgent,
} from "react-icons/md";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import SocialLinks from "../../Components/ReUsable/SocialLinks/SocialLinks";
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="w-[90vw] mx-auto mt-8 pt-8 pb-24 ">
      <h2 className="text-3xl my-6">LakeFront Real Estates</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[80vw] p-6  items-start  font-sans">
        <div>
          <h2 className="text-xl lg:mt-6">Lake Oconee Real Estate Expert</h2>
        </div>
        <div className="flex-col justify-center font-bold">
          <div className="lg:flex justify-around items-center my-6">
            <p className="text-3xl">
              <MdOutlineMailOutline />
            </p>
            <p>
              EMAIL <br />
              FARIARAHMAN622@GMAIL.COM
            </p>
          </div>
          <div className="lg:flex justify-around items-center my-6">
            <p className="text-3xl">
              <FaMapLocationDot />
            </p>
            <p>
              ADDRESS <br />
              02346 JOHNSBARG UTC- LAKE RY
            </p>
          </div>
          <p className="lg:ml-[25%]">QUICK LINKS</p>
        </div>
        <div className="lg:ml-[10%] lg:flex justify-around items-center my-6 font-bold">
          <p className="text-3xl -mr-16">
            <PiPhoneDisconnectBold />
          </p>
          <p>
            PHONE - NUMBER <br />
            +88 01970-477973
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 w-[90vw] ">
        <div className="text-2xl bg-transparent"><img src={logo} className=" w-36 bg-transparent"alt="" /></div>
        <div className="lg:-ml-[25%]">
          <h2 className="my-4">
            All information deemed reliable but not guaranteed and should be
            independently reviewed and verified.
          </h2>
          <div className="flex justify-start text-4xl gap-4">
            <MdRealEstateAgent />
            <MdHomeWork />
          </div>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-24 lg:gap-4">
        <div className="text-2xl relative">
            <h2>Powered By <span className="font-bold underline">Luxury Presence</span></h2>
            <div className="absolute left-0">
            <SocialLinks></SocialLinks>
            </div>
            
        </div>
        <div>
            <p className="text-2xl">Copyright © 2024 <span className="font-bold"> | Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
