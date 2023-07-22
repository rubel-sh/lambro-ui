import Container from "@/components/Layout/Container";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const LambroTokenomics = () => {
    const stats = [
        {
            color: "#f9c270",
            text: "Public Sale and Liquidity Pools",
            percentage: "60%",
        },
        {
            color: "#7c0bff",
            text: "Development and Marketing",
            percentage: "10%",
        },
        {
            color: "#e21269",
            text: "Team and Advisors",
            percentage: "15%",
        },
        {
            color: "#0073fe",
            text: "Reserve",
            percentage: "15%",
        },
    ];
    return (
        <Container className="pt-32 pb-40">
            <div className="text-center">
                <GradientTextSmallHeading>Tokenomics</GradientTextSmallHeading>
                <p className="text-[#b09fc9] text-[20px] mt-2 pb-2">
                    Lambro’s tokenomics optimize rewards and utilities for holders.
                </p>
                <p>
                    Currently over 90% of each wallet is locked leaving the liquidity(6%) and around an extra 3% of
                    supply circulating.
                </p>
            </div>
            {/* Image + Statistics */}
            <div className="grid lg:grid-cols-3 mt-12 gap-x-32 gap-y-5 max-w-[730px] mx-auto ">
                <div className="mx-auto col-span-2 lg:col-span-1">
                    <Image
                        src="/assets/img/tokenomics-chart-graphic.png"
                        alt="Lambro statistics"
                        width={800}
                        height={800}
                        className="max-w-[220px]  self-center"
                        draggable={false}
                    />
                </div>
                <div className="col-span-2 self-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center gap-2  py-2">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: stat.color }}></div>
                            <div className="flex-1">{stat.text}</div>
                            <div>{stat.percentage}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default LambroTokenomics;
