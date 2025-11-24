import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faStar, faStarHalf, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import reviewImg from "../assets/reviewImg.png";
import heroPlant from "../assets/heroPlant.png"
import Button from "./Button.jsx";

const Content = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  }
  return (
    <section className="flex max-sm:flex-col lg:h-screen justify-around max-lg:mt-25 items-center max-sm:gap-15">
      <div className="flex flex-col gap-10 max-sm:item-center w-[60%] max-lg:w-[45%] max-sm:w-full">
        <div className="flex flex-col gap-2">
          <p className="font-semibold opacity-75 text-8xl max-sm:text-6xl">Earth's Exhale</p>
          <p className="font-medium text-xl opacity-75  max-sm:w-full max-sm:text-lg">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>
          <div className="flex items-center gap-5">
            <Button Text="Buy Now" />
            <button className="border-2 rounded-full p-3 cursor-pointer opacity-100 hover:opacity-75">
              <FontAwesomeIcon className="opacity-75" icon={faPlay} />
            </button>
            <p className="font-indie text-xl">Live Demo...</p>
          </div>
        </div>


        <div className='bg-[url("/reviewFrame.svg")] bg-center bg-cover bg-no-repeat overflow-hidden rounded-4xl w-91.5 backdrop-blur p-7 flex flex-col gap-5 justify-center'>
          <div className="flex items-center gap-5">
            <img
              src={reviewImg}
              className="h-16 w-16 rounded-full object-cover"
              alt="user image"
            />
            <div className="flex flex-col gap-2">
              <p className="text-xl">Ronnie Hamill</p>
              <div className="flex gap-1">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-sm" />
                <FontAwesomeIcon icon={faStarHalf} className="text-yellow-400 text-sm" />
              </div>
            </div>
          </div>
          <p className="font-regular opacity-75">I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
        </div>
      </div>
      <div className="bg-[url('/Frame.svg')] bg-center w-80 h-97.5 bg-cover bg-no-repeat backdrop-blur p-5 pt-15 pb-10 mt-15 flex flex-col gap-5 justify-end">
        <img src={heroPlant} className="w-full " alt="Plant image" />
        <div className="flex items-center justify-between">
          <div>
            <p className="opacity-75">Indoor Plant</p>
            <p className="opacity-75 text-2xl mb-3">Aglaonema plant</p>
            <Button Text="Buy Now" />
          </div>
          <FontAwesomeIcon icon={faAngleRight} onClick={handleNext} className="text-xl cursor-pointer opacity-75 hover:opacity-100" />
        </div>
        <div className="flex items-center justify-center gap-1" >
          <div className={`border-2 rounded-full opacity-75 ${index === 0 ? "w-4 opacity-100" : "w-1"} h-0`}></div>
          <div className={`border-2 rounded-full opacity-75 ${index === 1 ? "w-4 opacity-100" : "w-1"} h-0`}></div>
          <div className={`border-2 rounded-full opacity-75 ${index === 2 ? "w-4 opacity-100" : "w-1"} h-0`}></div>
        </div>
      </div>
    </section>
  );
};

export default Content;
