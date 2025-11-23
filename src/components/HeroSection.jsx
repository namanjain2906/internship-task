import React from "react";
import Content from "./Content";
import TrendySection from "./TrendySection";

const HeroSection = () => {
  return (
    <div className='relative top-[-125px] z-0 bg-[url("/Background_plant.jpg")] bg-center bg-cover w-full  max-sm:h-650 md:h-500 lg:h-480 pt-[125px] mb-30'>
      <div className="m-10 max-sm:mt-25 ">
        <Content />
        <TrendySection/>
      </div>
    </div>
  );
};

export default HeroSection;
