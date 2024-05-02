import React from "react";
import Banner from "../../Components/Banner/Banner";
import AboutSection from "../../Components/AboutSection/AboutSection";
import Achivement from "../../Components/Achivement/Achivement";
import HomeSearch from "../../Components/HomeSearch/HomeSearch";
import MeetAuthor from "../../Components/MeetAuthor/MeetAuthor";
import Testimonials from "../../Components/Testimonials/Testimonials";
import FeaturedForSell from "../../Components/FeaturedSell/FeaturedForSell";
import Newsletter from "../../Components/Newsletter/Newsletter";
import News from "../../Components/News/News";
import ModalButton from "../../Components/ReUsable/ModalButton/ModalButton";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className=" relative top-0 h-[100vh]">
        <Banner></Banner>
      </div>
      <div>
        <AboutSection></AboutSection>
      </div>
      <div>
        <Achivement></Achivement>
      </div>
      <div>
       <HomeSearch></HomeSearch>
      </div>
      <div>
        <MeetAuthor></MeetAuthor>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
      <div>
        <FeaturedForSell></FeaturedForSell>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
      <div>
        <News></News>
      </div>
    </div>
  );
};

export default Home;
