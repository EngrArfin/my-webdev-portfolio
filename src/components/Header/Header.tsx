import React from "react";
import HireMe from "../MagicButton/HireMe";

const Header: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello, I am Arfin</h1>
          <p className="mb-5">
            I am a passionate web developer with a focus on creating modern,
            responsive, I craft seamless digital experiences.
          </p>
          <div className="flex justify-center">
            <HireMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
