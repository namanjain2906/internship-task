// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

// const ReviewCard = ({ Name, Image, Content }) => {
//   return (
//     <div className='bg-[url("/customerReviewFrame.svg")] bg-center bg-cover bg-no-repeat w-85 h-78 p-10'>
//       <div className="flex gap-5 items-center">
//         <img
//           src={Image}
//           className="h-12 w-12 rounded-full"
//           alt="Profile image"
//         />
//         <div>
//           <p className="text-xl font-semibold">{Name}</p>
//           <span>
//             <FontAwesomeIcon
//               icon={faStar}
//               className="text-yellow-400 text-xs"
//             />
//             <FontAwesomeIcon
//               icon={faStar}
//               className="text-yellow-400 text-xs"
//             />
//             <FontAwesomeIcon
//               icon={faStar}
//               className="text-yellow-400 text-xs"
//             />
//             <FontAwesomeIcon
//               icon={faStar}
//               className="text-yellow-400 text-xs"
//             />
//             <FontAwesomeIcon
//               icon={faStarHalf}
//               className="text-yellow-400 text-xs"
//             />
//           </span>
//         </div>
//       </div>
//       <p className="mt-4 opacity-75 font-regular">{Content}</p>
//     </div>
//   );
// };

// export default ReviewCard;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = ({ Name, Image, Content }) => {
  return (
    <div
      className="
        bg-[url('/customerReviewFrame.svg')] 
         bg-center bg-cover bg-no-repeat w-85 h-78
        max-w-[320px] sm:max-w-[350px] 
        p-6 sm:p-8 
        rounded-xl
        shrink-0
      "
    >
      {/* Profile Section */}
      <div className="flex gap-5 items-center">
        <img
          src={Image}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
          alt="Profile"
        />
        <div>
          <p className="text-lg sm:text-xl font-semibold">{Name}</p>

          <span className="flex text-yellow-400 text-sm">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
          </span>
        </div>
      </div>

      {/* Content */}
      <p className="mt-4 text-sm sm:text-base opacity-75">
        {Content}
      </p>
    </div>
  );
};

export default ReviewCard;
