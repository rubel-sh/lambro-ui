import React from "react";

const Header = () => {
  return (
    <nav className="relative z-10">
      <div className="h-20 justify-between items-center gap-[496px] inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <img className="w-[60px] h-9" src="/assets/img/lambro-logo.png" />
          <div className="text-center text-violet-300 text-[28px] font-normal leading-7">
            Lambro
          </div>
        </div>
        <ul className="justify-start items-center gap-6 flex">
          <li className="text-white text-opacity-70 text-[15px] font-medium">
            About
          </li>
          <li className="text-white text-opacity-70 text-[15px] font-medium">
            Purpose
          </li>
          <li className="text-white text-opacity-70 text-[15px] font-medium">
            Token
          </li>
          <li className="text-white text-opacity-70 text-[15px] font-medium">
            Features
          </li>
          <li className="text-white text-opacity-70 text-[15px] font-medium">
            Academy
          </li>
          <li className="text-white text-opacity-70 text-[15px] font-medium">
            Roadmap
          </li>
          <button className="px-5 py-2.5 bg-indigo-900 rounded-[10px] border border-indigo-900 justify-start items-start gap-2.5 flex text-white text-[15px] font-medium">
            Contact Us
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
