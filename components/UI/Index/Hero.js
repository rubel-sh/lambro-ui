import React from "react";
import ActionButton from "../../widgets/ActionButton";
import RightArrowSvg from "../../SvgComponents/RightArrowSvg";
import { GradientTextLargeHeading } from "../../widgets/StyledComponents";

const Hero = () => {
    return (
        <div className="max-w-[942px] my-[172px] mx-auto relative z-10">
            <GradientTextLargeHeading className="text-center font-semibold">
                Drive Into Your Future With Lambro
            </GradientTextLargeHeading>
            <div className="mt-[25px]  text-center text-[#D8C4F3] text-[16px] lg:text-xl font-medium leading-[34px]">
                Discover a new realm of potential through the power of Lambro
            </div>

            <div className=" mt-[60px] flex justify-center gap-2 md:gap-x-5">
                <ActionButton arrow href={"https://lambro.gitbook.io/lambro"}>
                    Whitepaper
                </ActionButton>
                <ActionButton href="https://pancakeswap.finance/swap?outputCurrency=0x201AF44d9DfA5464F20B8dD8aA96Fc016d26E7C0">
                    Buy Lambro Tokens
                </ActionButton>
            </div>
            {/* <div className="text-white text-lg font-medium leading-[18px]">Whitepaper</div> */}
            <div className="w-6 h-6 relative" />
        </div>
    );
};

export default Hero;
