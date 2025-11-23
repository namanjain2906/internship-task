import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a2216] text-white py-16 px-6 sm:px-12 lg:px-20">
      {/* MAIN CONTENT ROW */}
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* LEFT SECTION */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <img src="/plantIcon.png" className="w-10 h-10" alt="Logo" />
            <p className="text-2xl font-semibold">FloraVision.</p>
          </div>

          <p className="mt-4 opacity-75 leading-relaxed text-sm sm:text-base">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          {/* Social Icons */}
        </div>

        {/* QUICK LINKS */}
        <div>
          <p className="text-xl font-semibold mb-5">Quick Link's</p>

          <ul className="flex flex-col gap-3 text-sm sm:text-base opacity-75">
            <li className="hover:opacity-100 cursor-pointer underline">Home</li>
            <li className="hover:opacity-100 cursor-pointer underline">
              Type’s Of plant’s
            </li>
            <li className="hover:opacity-100 cursor-pointer underline">
              Contact
            </li>
            <li className="hover:opacity-100 cursor-pointer underline">
              Privacy
            </li>
          </ul>
        </div>

        {/* SUBSCRIBE BOX */}
        <div className="max-w-sm">
          <p className="text-xl font-semibold mb-5">For Every Update.</p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="
                w-full p-3 rounded-l-md 
                bg-transparent border border-white outline-none
                placeholder:opacity-75
              "
            />
            <button
              className="
                bg-white text-black font-semibold 
                px-5 rounded-r-md border border-white
              "
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="flex items-center justify-between max-md:flex-col" >
        <div className="flex gap-6 mt-6 font-semibold text-sm items-center  ">
          <span className="cursor-pointer opacity-75 hover:opacity-100">
            FB
          </span>
          <span className="cursor-pointer opacity-75 hover:opacity-100">
            TW
          </span>
          <span className="cursor-pointer opacity-75 hover:opacity-100">
            LI
          </span>
        </div>
        <p className="text-center mt-12 opacity-60 text-sm">
          FloraVision © all right reserve
        </p>
      </div>
    </footer>
  );
};

export default Footer;
