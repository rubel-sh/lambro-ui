import Container from "@/components/Layout/Container";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const KeyFeaturesSection = () => {
    return (
        <Container className="!max-w-[1360px]">
            <div className="text-center pt-[90px] lg:pt-[190px]" id="features">
                <GradientTextSmallHeading>Key Features</GradientTextSmallHeading>
                <div className="mt-5">
                    <Image
                        src="/assets/img/lambro_key_features.svg"
                        width={1920}
                        height={1080}
                        draggable={false}
                        className="mix-blend-screen  w-full mx-auto hidden md:block select-none"
                    />
                    <Image
                        src="/assets/img/lambro_key_features_mobile.svg"
                        width={1920}
                        height={1080}
                        draggable={false}
                        className="mix-blend-screen  w-full mx-auto md:hidden select-none"
                    />
                </div>
            </div>
        </Container>
    );
};

export default KeyFeaturesSection;
