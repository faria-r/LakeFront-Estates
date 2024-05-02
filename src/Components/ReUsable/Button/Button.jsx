import React from "react";

const Button = ({ value }) => {
  return (
    <div>
      <button className="btn border-2 border-sky-950 bg-transparent rounded-none px-20 py-4 mb-8 text-center hover:bg-sky-950 hover:text-white">
        {value}
      </button>
    </div>
  );
};

export default Button;
