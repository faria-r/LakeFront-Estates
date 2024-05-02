import React, { useRef } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiPhoneDisconnectBold } from "react-icons/pi";
import SocialLinks from "../../Components/ReUsable/SocialLinks/SocialLinks";
import EMailSend from "../../Components/ReUsable/EmailSend/EMailSend";

const Contact = () => {
  return (
    <div className="bg-black">
      <img
        className="min-h-full min-w-full opacity-30"
        src="https://i.ibb.co/D10S6PB/ki.jpg"
        alt=""
      />
      <div className="w-[90%] min-h-screen grid lg:grid-cols-2 gap-4 pt-16 px-8   text-white  text-center absolute top-0 left-0 right-0 mx-auto">
        <div className="border-r-[1px] min-h-screen">
          <h1 className="text-5xl font-mono mb-6 pt-6 text-start">
            Contact details
          </h1>
          <div className="flex-col justify-start font-bold relative">
            <div>
              <p className="text-start text-xl mb-2">Faria Rahman</p>
            </div>
            <div className="lg:flex justify-start items-center my-6  text-start">
              <p className="text-3xl mr-8">
                <MdOutlineMailOutline />
              </p>
              <p>
                EMAIL <br />
                FARIARAHMAN622@GMAIL.COM
              </p>
            </div>
            <div className="lg:flex justify-start items-center my-6 text-start">
              <p className="text-3xl  mr-8">
                <FaMapLocationDot />
              </p>
              <p>
                ADDRESS <br />
                02346 JOHNSBARG UTC- LAKE RY
              </p>
            </div>
            <div className=" lg:flex justify-start items-center my-6 font-bold text-start">
              <p className="text-3xl  mr-8">
                <PiPhoneDisconnectBold />
              </p>
              <p>
                PHONE - NUMBER <br />
                +88 01970-477973
              </p>
            </div>
            <div className="absolute left-0">
              <SocialLinks></SocialLinks>
            </div>
          </div>
        </div>
        <EMailSend></EMailSend>
      </div>
    </div>
  );
};

export default Contact;
