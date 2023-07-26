import Image from "next/image";
import React from "react";
import { GradientTextCardTitle } from "./StyledComponents";
import TeamCardSvg from "../SvgComponents/TeamCardSvg";

const TeamCard = ({ image, name, designation, onClick }) => {
    return (
        <div className="relative group cursor-pointer" onClick={onClick}>
            <TeamCardSvg />
            <div className="absolute inset-x-0 inset-y-0 overflow-hidden">
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
            </div>

            <div className="absolute inset-x-0 inset-y-0 -translate-y-12 md:-translate-y-14 ">
                {/* Image section */}
                <div>
                    <Image src={image} width={1200} height={800} className="w-full h-full relative z-50" />
                </div>
                {/* Texts section */}
                <div className="mt-5 px-2">
                    <GradientTextCardTitle className="!text-[24px] font-medium">{name}</GradientTextCardTitle>
                    <p className="mt-2 text-base">{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
