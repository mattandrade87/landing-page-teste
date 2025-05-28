import React from "react";

const HeroTitle = () => {
  return (
    <div className="relative z-50 flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl animate-fadeInDown">
        Mateus Andrade
      </h1>
      <p className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white drop-shadow-xl animate-fadeInUp">
        Full Stack Developer
      </p>
    </div>
  );
};

export default HeroTitle;
