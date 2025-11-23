import React from "react";
import Content from "./Content";
import TrendySection from "./TrendySection";

const HeroSection = () => {
  return (
    <div className='relative top-[-125px] z-0 bg-[url("/Background_plant.jpg")] bg-center bg-cover w-full  max-sm:h-550 md:h-380 lg:h-500 pt-[125px] mb-15 max-sm:mb-0 min-h-screen '>
      <div className="m-10 max-lg:m-5 max-sm:mt-25 ">
        <Content />
        <TrendySection/>
      </div>
    </div>
  );
};

export default HeroSection;
