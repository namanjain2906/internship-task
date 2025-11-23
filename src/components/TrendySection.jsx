import React from "react";
import PlantCardLg from "./PlantCardLg";
import trendyPland1 from "../assets/trendyPlant1.png";
import trendyPland2 from "../assets/trendyPlant2.png";
import Heading from "./Heading";

const TrendySection = () => {
  return (
    <div className="flex flex-col gap-25 mt-20 max-sm:mt-25 mb-10 items-center">
      <Heading Text="Our Trendy plants" />
      <PlantCardLg Image={trendyPland1} Title="For Your Desks Decorations" Content="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!" Price={599}/>
      <PlantCardLg Image={trendyPland2} Title="For Your Desks Decorations" Content="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming" Price={399} Inverted={true} />
    </div>
  );
};

export default TrendySection;
