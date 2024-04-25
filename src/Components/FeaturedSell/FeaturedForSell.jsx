import React from "react";
import Button from "../ReUsable/Button/Button";

const FeaturedForSell = () => {
  return (
    <div className="w-[90vw] mx-auto text-center">
      <h2 className="text-5xl font-serif pt-36 pb-12">
        Lake Oconee Real Estate for Sale
      </h2>
      <div className="grid grid-cols-2 gap-8 h-auto p-8 mb-8">
      <div className="h-[90vh] relative">
          <div>
            <img src="https://i.ibb.co/S76QYFs/Home17.jpg" alt="" className="h-[60vh] w-[70vw]" />
          </div>
          <div className="bg-sky-900 py-16 text-white text-center  font-bold font-sans">
            <p className="text-2xl">
              1220 LAKE CLUB DRIVE
             
            </p>
            <p> 1220 LAKE CLUB DRIVE, GREENSBORO, GA 30642</p>
          </div>
          <div className="absolute top-0 right-0"> <p className="bg-sky-900 px-16 py-2 text-white">FOR SALE</p></div>
        </div>
        <div className="h-[90vh] relative">
          <div>
            <img src="https://i.ibb.co/S76QYFs/Home17.jpg" alt="" className="h-[60vh] w-[70vw]" />
          </div>
          <div className="bg-sky-900 py-16 text-white text-center  font-bold font-sans">
            <p className="text-2xl">
              1220 LAKE CLUB DRIVE
             
            </p>
            <p> 1220 LAKE CLUB DRIVE, GREENSBORO, GA 30642</p>
          </div>
          <div className="absolute top-0 right-0"> <p className="bg-sky-950 px-16 py-2 text-white">FOR SALE</p></div>
        </div>
      </div>
    <Button value={"View All"}></Button>
    </div>
  );
};

export default FeaturedForSell;
