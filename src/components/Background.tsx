import React from "react";
import background from "../assets/background.png";

const Background = () => {
  return (
    <div className="h-[80vh]">
      <img
        src={background}
        alt="background"
        className="w-full h-full object-cover object-[center_70%]"
      />
    </div>
  );
};

export default Background;
