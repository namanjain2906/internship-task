import React from "react";
import PlantCardLg from "./PlantCardLg";
import trendyPland1 from "../assets/trendyPlant1.png";
import trendyPland2 from "../assets/trendyPlant2.png";
import Heading from "./Heading";

const TrendySection = () => {
  return (
    <div className="flex flex-col gap-25 max-lg:gap-15 max-sm:gap-15 mt-10 max-sm:mt-40 mb-10 items-center justify-center">
      <Heading Text="Our Trendy plants" />
      <div className="flex lg:justify-center items-center gap-30 max-sm:gap-10 lg:flex-col overflow-x-scroll  scrollbar-hidden [scrollbar-width:none] py-30 max-sm:px-7 w-screen ">
        <PlantCardLg
          Image={trendyPland1}
          Title="For Your Desks Decorations"
          Content="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
          Price={599}
        />
        <PlantCardLg
          Image={trendyPland2}
          Title="For Your Desks Decorations"
          Content="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming"
          Price={399}
          Inverted={true}
        />
      </div>
    </div>
  );
};

export default TrendySection;
