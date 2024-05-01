import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import useAxios from "../../Hooks/useAxios";

const Testimonials = () => {
  AOS.init();
  const { data } = useAxios("testimonials");
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="w-[80vw] mx-auto mt-24 items-center h-[80vh] lg:h-[70vh] mb-24"
      >
        <h2 className="text-center font-mono text-5xl mt-16 mb-16">
          Testimonials
        </h2>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg opacity-[.4]"
            style={{
              "background-image": "url(https://i.ibb.co/f8L3s7d/Home21.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>

          {data.map((each) => (
            <SwiperSlide key={each._id} each={each} className="text-center">
              <div className="text-2xl" data-swiper-parallax="-300">
                {each.name}
              </div>
              <div className="lg:mt-4" data-swiper-parallax="-200">
                {each.title}
              </div>
              <div
                className="w-3/4 line-clamp-5 mx-auto my-6 text-justify"
                data-swiper-parallax="-100"
              >
                <p>{each.about}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
