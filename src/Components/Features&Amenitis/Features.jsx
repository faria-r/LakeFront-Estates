import React from "react";

const Features = ({ interior, exterior }) => {
  return (
    <div>
      <h2 className="text-5xl font-mono font-semibold text-center">
        FEATURES & AMENITIS
      </h2>
      <div className="lg:flex justify-between items-start w-[90vw] mx-auto gap-4 p-4 text-gray-500 font-sans text-xl">
        <div>
          <h1 className="border-b-[1px] text-black font-bold leading-[50px]">INTERIOR</h1>
          <div className="leading-[50px] flex">
            <div>
              <span className="mr-[53px]">TOTAL BEDROOM:</span> <br />
              <span className="mr-[43px]">TOTAL BATHROOM:</span> <br />
              <span className="mr-[43px]">FULLL BATHROOM:</span> <br />
              <span className="mr-[43px]">HALf BATHROOM:</span> <br />
              <span className="mr-[43px]">FLOORING:</span> <br />
              <span className="mr-[43px]">APPLIENCES:</span> <br />
              <span className="mr-[43px]">Other INTERIOR FEATURES:</span>
            </div>
            <div className="font-bold text-black w-[30vw]">
              <h3>{interior.bed}</h3>
              <h3>{interior.bath}</h3>
              <h3> 2</h3>
              <h3>1</h3>
              <h3>{interior.flooring}</h3>
              <h3>{interior.appliances}</h3>
              <h3>{interior.others}</h3>
            </div>
          </div>
        </div>

        <div>
          <h1 className="border-b-[1px] text-black leading-[50px] font-bold">EXTERIOR</h1>
          <div className="leading-[50px] flex">
            <div>
              <span className=" uppercase ">TOTAL garage:</span> <br />
              <span className=" uppercase mr-[43px]">TOTAL stories:</span> <br />
              <span className=" uppercase mr-[43px]"> pool:</span> <br />
              <span className=" uppercase mr-[43px]">roof:</span> <br />
              <span className=" uppercase mr-[43px]">heat:</span> <br />
              <span className=" uppercase mr-[43px]">sewer:</span> <br />
            </div>
            <div className="font-bold text-black w-[25vw]">
              <h3>{exterior.garage}</h3>
              <h3>{exterior.stories}</h3>
              <h3>{exterior.pool}</h3>
              <h3>{exterior.roof}</h3>
              <h3>{exterior.heat}</h3>
              <h3>{exterior.sewer}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
