import Container from "@/components/Layout/Container";
import LambroRoadmapDesktopSvg from "@/components/SvgComponents/LambroRoadmapDesktopSvg";
import LambroRoadmapMobileSvg from "@/components/SvgComponents/LambroRoadmapMobileSvg";
import RoadmapEllipseSvg from "@/components/SvgComponents/RoadmapEllipseSvg";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const LambroRoadmapSection = () => {
    return (
        <div className="mt-20 lg:mt-36 text-center overflow-hidden bg-[#070211]">
            <GradientTextSmallHeading className="lg:!text-[44px] mb-5 lg:mb-16 pt-16 font-semibold relative z-10">
                Lambro Roadmap
            </GradientTextSmallHeading>

            <div className="relative isolate ">
                <Container>
                    <div className="hidden md:block">
                        <LambroRoadmapDesktopSvg />
                    </div>
                    <div className="md:hidden">
                        <LambroRoadmapMobileSvg />
                    </div>
                </Container>
                {/* <div className="absolute inset-x-0 inset-y-0 -z-10  md:-translate-y-1/2 ">
                    <RoadmapEllipseSvg />
                </div> */}
                <div className="absolute bottom-0 -z-10">
                    <Image
                        src="/assets/img/roadmap_bg.png"
                        width={1920}
                        height={1080}
                        alt=""
                        objectFit="cover"
                        objectPosition="center"
                    />
                </div>
            </div>
        </div>
    );
};

export default LambroRoadmapSection;
