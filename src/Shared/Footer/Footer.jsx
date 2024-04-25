import React from "react";

const Footer = () => {
  return (
    <div className="w-[90vw] mx-auto mt-8">
      <h2 className="text-3xl my-6">LakeFront Real Estates</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[75vw] p-6">
        <div >
          <h2 className="text-xl">Lake Oconee Real Estate Expert</h2>
        </div>
        <div>
          <div className="lg:flex justify-around items-center">
            <p>icon</p>
            <p>
              EMAIL <br />
             FARIARAHMAN622@GMAIL.COM
            </p>
          </div>
          <div className="lg:flex justify-around items-center">
            <p>icon</p>
            <p>
              ADDRESS <br />
              1011 PARK LANE GREENSBORO, GA 30642
            </p>
          </div>
          <p>QUICK LINKS</p>
        </div>
        <div className="lg:flex justify-around items-center">
            <p>icon</p>
            <p>
              PHONE NUMBER <br />
              1011 PARK LANE GREENSBORO, GA 30642
            </p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
