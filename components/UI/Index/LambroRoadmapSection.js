import Container from "@/components/Layout/Container";
import LambroRoadmapDesktopSvg from "@/components/SvgComponents/LambroRoadmapDesktopSvg";
import LambroRoadmapMobileSvg from "@/components/SvgComponents/LambroRoadmapMobileSvg";
import RoadmapEllipseSvg from "@/components/SvgComponents/RoadmapEllipseSvg";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import React from "react";

const LambroRoadmapSection = () => {
    return (
        <div className="mt-20 lg:mt-36 text-center ">
            <GradientTextSmallHeading className="lg:!text-[44px] mb-5 lg:mb-16">
                Lambro Roadmap
            </GradientTextSmallHeading>

            <div className="relative">
                <Container>
                    <div className="hidden md:block">
                        <LambroRoadmapDesktopSvg />
                    </div>
                    <div className="md:hidden">
                        <LambroRoadmapMobileSvg />
                    </div>
                </Container>
                <div className="absolute inset-x-0 inset-y-0 -z-10  md:-translate-y-1/2 ">
                    <RoadmapEllipseSvg />
                </div>
            </div>
        </div>
    );
};

export default LambroRoadmapSection;
