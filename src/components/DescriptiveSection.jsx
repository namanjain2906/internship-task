import React, { useState } from "react";
import Heading from "./Heading";
import heroPlant from "../assets/heroPlant.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const DescriptiveSection = () => {
  const [index, setIndex] = useState(0);
  
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 4);
  };
  
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  return (
    <>
      <Heading Text="Our Best o2" />
      <div
        className='
          bg-[url("/descriptiveFrame.svg")] bg-center bg-cover bg-no-repeat 
          h-auto lg:h-151.5 
          p-5 sm:p-8 
          mx-5 sm:mx-10 lg:mx-15 
          mt-10 lg:mt-40 
          flex 
          flex-col lg:flex-row 
          items-center 
          gap-10 
          justify-evenly
          rounded-4xl
        '
      >
        <div className="flex justify-center items-end lg:mb-45 w-full lg:w-450">
          <img
            src={heroPlant}
            className="w-60 sm:w-80 md:w-96 lg:w-150"
            alt="Plant Image"
          />
        </div>
        <div className="flex flex-col gap-3 w-full max-w-xl px-2">
          <p className="opacity-75 text-2xl sm:text-3xl font-semibold">
            We Have Small And Best O2 Plants Collection’s
          </p>

          <p className="opacity-75 text-lg sm:text-xl font-semibold">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>

          <p className="opacity-75 text-lg sm:text-xl font-semibold">
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>
          <span className="flex justify-between items-center mt-3">
            <Button Text="Buy Now" />

            <span className="flex gap-3 items-center justify-center">
              <FontAwesomeIcon
                icon={faAngleLeft}
                onClick={handlePrev}
                className="text-xl sm:text-2xl cursor-pointer opacity-75 hover:opacity-100"
              />

              <span className="flex items-end">
                <p className="opacity-75 font-bold text-md ">{String(index + 1).padStart(2, '0')}/</p>
                <p className="opacity-75 font-bold text-sm ">04</p>
              </span>

              <FontAwesomeIcon
                icon={faAngleRight}
                onClick={handleNext}
                className="text-xl sm:text-2xl cursor-pointer opacity-75 hover:opacity-100"
              />
            </span>
          </span>

        </div>
      </div>
      <div className="flex justify-center items-center gap-2 opacity-75 my-10 mx-auto">
        <span className={`border-2 rounded-full ${index === 0 ? "w-4 opacity-100" : "w-1 opacity-40"}`}></span>
        <span className={`border-2 rounded-full ${index === 1 ? "w-4 opacity-100" : "w-1 opacity-40"}`}></span>
        <span className={`border-2 rounded-full ${index === 2 ? "w-4 opacity-100" : "w-1 opacity-40"}`}></span>
        <span className={`border-2 rounded-full ${index === 3 ? "w-4 opacity-100" : "w-1 opacity-40"}`}></span>
      </div>
    </>
  );
};

export default DescriptiveSection;