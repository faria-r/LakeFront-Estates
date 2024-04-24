import React from "react";
import Banner from "../../Components/Banner/Banner";
import AboutSection from "../../Components/AboutSection/AboutSection";
import Achivement from "../../Components/Achivement/Achivement";

import HomeSearch from "../../Components/HomeSearch/HomeSearch";

const Home = () => {
  return (
    <div>
      <div className="relative top-0 h-[100vh] w-[100%]">
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
    </div>
  );
};

export default Home;
