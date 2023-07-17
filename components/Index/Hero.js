import React from "react";

const Hero = () => {
  return (
    <div className="w-[942px] my-[172px] mx-auto h-[368px] relative z-10">
      <div className="w-[942px] left-0 top-0 absolute text-center text-violet-300 text-[76px] font-bold leading-[90px]">
        Unleash Your Future with Next-Gen Meme Coin
      </div>
      <div className="w-[942px] left-0 top-[205px] absolute text-center text-purple-300 text-xl font-medium leading-[34px]">
        Unleash Lambro Academy's power. Explore tokonomas and staking. Start
        your journey now!
      </div>
      <div className="w-[237px] h-16 px-[46px] py-5 left-[353px] top-[304px] absolute bg-gradient-to-bl from-violet-500 via-violet-500 to-violet-600 rounded-[10px] border border-violet-400 justify-center items-center gap-[15px] inline-flex">
        <div className="text-white text-lg font-medium leading-[18px]">
          Whitepaper
        </div>
        <div className="w-6 h-6 relative" />
      </div>
    </div>
  );
};

export default Hero;
