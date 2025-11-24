import React from "react";

const Button = ({Text}) => {
  return (
    <button className="border-2 rounded-xl py-2 px-6 cursor-pointer text-xl opacity-100 hover:opacity-75">
      {Text}
    </button>
  );
};

export default Button;
