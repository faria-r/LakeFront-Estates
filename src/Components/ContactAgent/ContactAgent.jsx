import React from "react";

const ContactAgent = () => {
  return (
    <div className="w-auto bg-sky-950 p-6 text-center text-white lg:h-[63vh] ">
    <div className="w-[80vw] mx-auto lg:flex justify-center items-center text-center p-6">
    <div className="mr-16 w-52 mx-auto">
        <img className='h-[40vh]'src="https://i.ibb.co/9Hdpnp0/Riezl-Baker-headshot.jpg" alt="" />
      </div>
      <div className="text-center lg:text-start w-[50vw] mx-auto pt-6 lg:pt-2">
        <h2 className="text-2xl font-mono">Faria Rahman</h2>
        <div className="lg:flex justify-between gap-4 items-center mt-8">
          <div>
            <p className="font-bold mb-2">TITLE</p>
            <p>Realtor®, Founding Principal</p>
          </div>
          <div>
            <p className="font-bold mb-2">PHONE</p>
            <p>(706) 347-2625</p>
          </div>
          <div>
            <p className="font-bold mb-2">EMAIL</p>
            <p>FARIARAHMAN622@GMAIL.COM</p>
          </div>
        </div>
        <div className=" pt-6  w-[30vw] my-4 ">
          
            <div>
            <button className="btn border-2 border-white bg-sky-950 bg-transparent rounded-none px-20 py-4 mb-8 text-center text-white ">CONTACT  AGENT</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactAgent;
