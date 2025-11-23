import React from "react";
import PlantCardSm from "./PlantCardSm";
import heroPlant from "../assets/heroPlant.png";
import topSelling2 from "../assets/topSelling2.png";
import topSelling3 from "../assets/topSelling3.png";
import topSelling4 from "../assets/topSelling4.png";
import topSelling5 from "../assets/topSelling5.png";
import topSelling6 from "../assets/topSelling6.png";
import Heading from "./Heading";``
const TopSellingSection = () => {
  return (
    <>
      <Heading Text="Our Top Selling Plants" />
      <div className="flex justify-evenly items-center lg:flex-wrap flex-nowrap gap-5 px-5 max-lg:overflow-x-scroll mt-15 mb-40 scrollbar-hidden [scrollbar-width:none]">
      

      <PlantCardSm Image={heroPlant} Title="Aglaonema plant" Content="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care" Price={300}/>
      <PlantCardSm Image={topSelling2} Title="Plantain Lilies" Content="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes," Price={380}/>
      <PlantCardSm Image={topSelling3} Title="Cactus" Content="It is known for their ability to thrive in arid environments" Price={259}/>
    
      <PlantCardSm Image={topSelling4} Title="Swiss cheese Plant" Content="It is a popular tropical houseplant known for its distinctive, perforated leaves" Price={400}/>
      <PlantCardSm Image={topSelling5} Title="Sansevieria plant" Content="It is a popular indoor plant admired for its striking appearance and low-maintenance nature." Price={450}/>
      <PlantCardSm Image={topSelling6} Title="Agave plant" Content="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms." Price={359}/>
    
      </div>
    </>
  );
};

export default TopSellingSection;
