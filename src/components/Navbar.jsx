import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import plantLogo from "../assets/plant.png";
import searchButton from "../assets/searchButton.png";
import bagIcon from "../assets/bagIcon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="z-10 fixed top-0 left-0 backdrop-blur flex w-full justify-between p-5 max-sm:p-3 items-center">
      <Link
        to="/"
        className="relative  text-2xl font-black opacity-75 flex items-center gap-2 cursor-pointer"
      >
        <img className="h-12 w-12 " src={plantLogo} alt="Plant Logo" />
        <span>FloraVision.</span>
      </Link>

      <ul
        className={`font-indie text-xl flex items-center gap-12 max-lg:absolute max-lg:top-20 max-lg:backdrop-blur-xl max-lg:right-0 max-lg:flex-col max-lg:bg-[#1B2316]/75  max-lg:rounded-4xl max-lg:w-full max-lg:p-5 max-lg:shadow-md ${isMenuOpen ? "max-lg:flex " : "max-lg:hidden"
          }`}
      >
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/plants-type">
            Plants Type

            <FontAwesomeIcon icon={faCaretDown} />

          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/more">More</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex justify-center items-center gap-10 max-lg:gap-5">
        <button>
          <img
            className="h-7 w-7 opacity-75 cursor-pointer"
            src={searchButton}
            alt="Search Icon"
          />
        </button>
        <button>
          <img
            className="h-7 w-7 opacity-75 cursor-pointer"
            src={bagIcon}
            alt="Bag Icon"
          />
        </button>
        <div
          className="flex flex-col justify-center items-end gap-1.5 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="h-0 w-7 border-2 rounded "></div>
          <div className="h-0 w-5 border-2 rounded "></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
