import BrightGlowLineSvg from "@/components/SvgComponents/BrightGlowLineSvg";
import { GradientTextCardTitle, GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const GenericCard = ({ image, title, desc, glowColor }) => {
    return (
        <div
            className="relative bg-[#161527] bg-opacity-80 backdrop-blur-sm py-[18px] px-[17px] lg:py-[29px] lg:px-[26px] group overflow-x-hidden overflow-y-clip"
            style={{
                clipPath: " polygon(0 10%, 6% 0, 94% 0, 100% 10%, 100% 90%, 94% 100%, 6% 100%, 0 90%)",
            }}
        >
            <Image
                src={"/assets/img/BrightGlowLine.png"}
                width={300}
                height={170}
                className="mix-blend-screen -translate-y-1/2 absolute top-0 -right-16 group-hover:right-0 transition-all"
            />
            <Image
                src={"/assets/img/BrightGlowLine.png"}
                width={300}
                height={170}
                className="mix-blend-screen translate-y-1/2 absolute bottom-0 -left-16 group-hover:left-0 transition-all"
            />
            <div className="relative">
                <Image src={image} width={95} height={95} className="w-[80px] h-[80px]" />
                <div
                    className="absolute top-5 left-5 w-[20px] rounded-full h-[20px] -z-10"
                    style={{ backgroundColor: glowColor, boxShadow: `0px 0px 30px 10px ${glowColor}` }}
                ></div>
            </div>
            <GradientTextCardTitle className={"mt-4"}>{title}</GradientTextCardTitle>
            <p className="mt-3 text-base">{desc}</p>
        </div>
    );
};

export default GenericCard;
