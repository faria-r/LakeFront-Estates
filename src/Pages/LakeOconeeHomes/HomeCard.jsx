import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const HomeCard = ({home}) => {
  AOS.init();
    const {_id,name,address,price,Homepicture} = home;
    return (
        <div data-aos="zoom-in-up"data-aos-duration="3000" className='h-auto mb-8 mt-8'>
            <Link to={`/home/${_id}`}>
            <div className="h-auto relative mx-auto shadow-xl">
          <div>
            <img
              src={Homepicture}
              alt=""
              className="lg:h-[40vh] lg:w-[60vw] hover:scale-105"
            />
          </div>
          <div className=" p-6 font-sans">
            <p className='text-2xl my-2'>$ {price}</p>
            <p className="">{name}</p>
            <p> {address}</p>
          </div>
          <div className="absolute top-0 right-0">
            {" "}
            <p className="bg-sky-900 px-4 py-1 text-white">FOR SALE</p>
          </div>
        </div>
            </Link>
         
        </div>
    );
};

export default HomeCard;