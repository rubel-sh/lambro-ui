import { GradientTextCardTitle } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GenericCard = ({ image, title, desc, glowColor, href }) => {
    return (
        <Link
            href={href}
            target="_blank"
            className="relative bg-[#161527] bg-opacity-80 backdrop-blur-sm py-[18px] px-[17px] lg:py-[29px] lg:px-[26px] group overflow-x-hidden overflow-y-clip"
            style={{
                clipPath: " polygon(0 10%, 10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%)",
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
                <Image src={image} width={80} height={80} className="w-[70px] h-[70px]" />
                <div
                    className="absolute top-8 left-10 w-[20px] rounded-full h-[20px] -z-10"
                    style={{ backgroundColor: glowColor, boxShadow: `0px 0px 40px 10px ${glowColor}` }}
                ></div>
            </div>
            <GradientTextCardTitle className={"mt-6"}>{title}</GradientTextCardTitle>
            <p className="mt-3 text-base">{desc}</p>
        </Link>
    );
};

export default GenericCard;
