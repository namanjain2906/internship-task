import React from "react";


const Heading = ({Text}) => {
  return (
    <div className="font-semibold text-4xl max-lg:text-3xl text-center flex justify-center items-center  ">
      <div className="border-5 opacity-50 border-transparent rounded-bl-xl border-l-[#FBD300]  border-b-[#FBD300] w-10 h-10"></div>
      {Text}
      <div className="border-5 opacity-50 border-transparent rounded-tr-xl border-r-[#FBD300]  border-t-[#FBD300] w-10 h-10"></div>
    </div>
  );
};

export default Heading;
