import React from "react";
import ReviewCard from "./ReviewCard";
import Heading from "./Heading";

import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";

const CustReviewSection = () => {
  return (
    <>
      <Heading Text="Customer Review" />

      <div
        className="
          mt-10 mb-20 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          place-items-center
          px-4
        "
      >
        <ReviewCard 
          Image={customer1} 
          Name="Shelly Russel" 
          Content="Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
        />

        <ReviewCard 
          Image={customer2} 
          Name="Lula Rolfson" 
          Content="Each one has its own unique charm and personality, and they’ve already started brightening up my space."
        />

        <ReviewCard 
          Image={customer3} 
          Name="Carol Huels" 
          Content="It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
        />
      </div>
    </>
  );
};

export default CustReviewSection;
