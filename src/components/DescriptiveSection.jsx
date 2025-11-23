import React from "react";
import Heading from "./Heading";
import heroPlant from "../assets/heroPlant.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const DescriptiveSection = () => {
  return (
    <>
      <Heading Text="Our Best o2" />

      {/* Outer Container */}
      <div
        className='
          bg-[url("/descriptiveFrame.svg")] bg-center bg-cover bg-no-repeat 
          h-auto lg:h-135 
          p-5 sm:p-8 
          mx-5 sm:mx-10 lg:mx-15 
          mt-10 lg:mt-40 
          flex 
          flex-col lg:flex-row 
          items-center 
          gap-10 
          justify-evenly
        '
      >

        {/* Image Section */}
        <div className="flex justify-center items-end lg:mb-45 w-full lg:w-450">
          <img
            src={heroPlant}
            className="w-60 sm:w-80 md:w-96 lg:w-150"
            alt="Plant Image"
          />
        </div>

        {/* Text Section */}
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

          {/* Buy + Navigation */}
          <span className="flex justify-between items-center mt-3">
            <button className="border-2 rounded-xl py-2 px-6 cursor-pointer text-lg sm:text-xl opacity-75">
              Buy Now
            </button>

            <span className="flex gap-3 items-center justify-center">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="text-xl sm:text-2xl cursor-pointer opacity-35"
              />

              <span className="flex items-end">
                <p className="opacity-75 font-bold text-md sm:text-lg">01/</p>
                <p className="opacity-75 font-bold text-md sm:text-lg">04</p>
              </span>

              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-xl sm:text-2xl cursor-pointer opacity-75"
              />
            </span>
          </span>

        </div>
      </div>

      {/* Bottom Dots */}
      <div className="flex justify-center items-center gap-2 opacity-75 my-10 mx-auto">
        <span className="border-2 w-4 rounded-full"></span>
        <span className="border-2 w-1 rounded-full"></span>
        <span className="border-2 w-1 rounded-full"></span>
      </div>
    </>
  );
};

export default DescriptiveSection;
