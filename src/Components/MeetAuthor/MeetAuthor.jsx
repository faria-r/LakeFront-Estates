import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../ReUsable/SocialLinks/SocialLinks";

const MeetAuthor = () => {
  return (
    <div className="w-[90vw]  mx-auto lg:text-start lg:flex  lg:justify-between items-center gap-2">
      <div className="lg:mr-8">
        <div className="sm:w-[65vw] mx-auto lg:w-auto text-center">
          <img className="w-full" src="https://i.ibb.co/k89ZvSk/650b43ed39865.webp" alt="" />
        </div>
        <div>
          <SocialLinks></SocialLinks>
        </div>
      </div>

      <div className="w-3/4 mx-auto">
        <div>
          <h2 className="text-4xl sm:mt-8 lg:mt-0 font-serif font-semibold">Meet Faria</h2>
        </div>
        <div className="w-3/4 border-b-[1px] border-b-gray-500 my-8"></div>
        <div>
          <p>
            Faria Rahman is an award-winning Realtor® with 23 years of real
            estate experience at Lake Oconee, Georgia. A resident since 1997,
            she is well-known for her business accomplishments and extensive
            community involvement. In 2020, she and her husband Ted co-founded
            Luxury Lake Oconee Real Estate Group to combine their over 40 years
            of experience in the Lake Oconee market and with a mission to
            provide the highest level of service to clients. 
            <p className="mt-4"> In 2023, Faria closed over $102 million in sales. She has been
            recognized as a 2024 "Top Luxury Real Estate Leader'' by The
            Atlantan magazine and a 2024 “Real Estate Newsmaker & Achiever'' by
            RISMedia. She was recognized as a 2023 Top Producer and was
            previously awarded the Crystal Phoenix Award by the Lake Country
            Board of Realtors® in 2022.</p>
           
          </p>
        </div>
        <Link><p className="font-bold font-serif underline mt-20">Learn More</p> </Link>
      </div>
    </div>
  );
};

export default MeetAuthor;
