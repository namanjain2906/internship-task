import React from "react";
import bagIcon from "../assets/bagIcon.png";

const PlantCardSm = ({ Image, Title, Content, Price }) => {
  return (
    <div className='bg-[url("/plantFrameSm.svg")] bg-center bg-cover bg-no-repeat flex flex-col justify-end w-90 h-110 mt-30 p-10 shrink-0'>
      <img src={Image} className="w-full " alt="Plant image" />
      <div className="flex flex-col opacity-75 gap-4 ">
        <p className="text-3xl  ">{Title}</p>
        <p className="w-full max-sm:w-full text-lg ">{Content}</p>
        <div className="flex items-center justify-between">
          <p className="text-3xl ">Rs. {Price}/-</p>
          <button className="border-2 rounded-lg p-2  cursor-pointer text-md opacity-75 hover:opacity-100">
            <img src={bagIcon} className="w-5 h-5" alt="Bag Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCardSm;
