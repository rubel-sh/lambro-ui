import React from "react";
import GradientText from "../widgets/GradientText";
import ActionButton from "../widgets/ActionButton";
import RightArrowSvg from "../SvgComponents/RightArrowSvg";

const Hero = () => {
    return (
        <div className="max-w-[942px] my-[172px] mx-auto relative z-10">
            <GradientText className="text-center font-semibold">
                Unleash Your Future with Next-Gen Meme Coin
            </GradientText>
            <div className="mt-[25px]  text-center text-[#D8C4F3] text-[16px] lg:text-xl font-medium leading-[34px]">
                Unleash Lambro Academy's power. Explore tokonomas and staking. Start your journey now!
            </div>

            <div className=" mt-[60px] flex justify-center">
                <ActionButton arrow>Whitepaper</ActionButton>
            </div>
            {/* <div className="text-white text-lg font-medium leading-[18px]">Whitepaper</div> */}
            <div className="w-6 h-6 relative" />
        </div>
    );
};

export default Hero;
