import React from "react";
import bagIcon from "../assets/bagIcon.png";

const PlantCardLg = ({ Image, Title, Content, Price, Inverted=false }) => {
  return (
    <div className={`bg-[url('/plantFrameLg.svg')] bg-center bg-cover bg-no-repeat backdrop-blur-lg p-10 h-97 w-300 max-sm:w-90 max-sm:h-130 max-sm:justify-end flex ${Inverted ? "flex-row-reverse" : ""} max-sm:flex-col justify-between items-center`}>
      <img src={Image} className="w-120 mb-45 max-sm:mb-0" alt="Plant image" />
      <div className="flex flex-col gap-4 ml-10">
        <p className="text-3xl font-semibold ">{Title}</p>
        <p className="w-150 max-sm:w-full text-lg font-semibold ">{Content}</p>
        <p className="text-3xl font-semibold">Rs. {Price}/-</p>
        <div className="flex items-center gap-5">
          <button className="border-2 rounded-lg py-2 p-8 cursor-pointer text-md ">
            Explore
          </button>
          <button className="border-2 rounded-lg p-2  cursor-pointer text-md ">
            <img src={bagIcon} className="w-5 h-5" alt="Bag Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCardLg;
