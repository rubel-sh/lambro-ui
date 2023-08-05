import Container from "@/components/Layout/Container";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const LambroRoadmapSection = () => {
    return (
        <div className="mt-14 lg:mt-28 text-center overflow-hidden bg-[#070211] " id="roadmap">
            <GradientTextSmallHeading className="lg:!text-[44px] mb-5 lg:mb-16 pt-16 font-semibold relative z-10">
                Lambro Roadmap
            </GradientTextSmallHeading>

            <div className="relative isolate ">
                <Container>
                    <div className="hidden md:block">
                        <Image
                            src="/assets/svg/roadmapDesktop.svg"
                            width={1920}
                            height={1080}
                            alt=""
                            draggable={false}
                            className="mix-blend-screen  w-full mx-auto  select-none"
                        />
                    </div>
                    <div className="md:hidden">
                        <Image
                            src="/assets/svg/roadmapMobile.svg"
                            width={1920}
                            height={1080}
                            alt=""
                            draggable={false}
                            className="mix-blend-screen  w-full mx-auto  select-none"
                        />
                    </div>
                </Container>

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
