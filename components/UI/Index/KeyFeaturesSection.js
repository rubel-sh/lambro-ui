import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const KeyFeaturesSection = () => {
    return (
        <div className="text-center pt-[90px] lg:pt-[190px]" id="features">
            <GradientTextSmallHeading>Key Features</GradientTextSmallHeading>
            <div className="mt-5">
                <Image
                    src="/assets/img/lambro_key_features.png"
                    width={1920}
                    height={1080}
                    draggable={false}
                    className="mix-blend-screen max-w-[1300px] w-full mx-auto hidden md:block select-none"
                />
                <Image
                    src="/assets/img/lambro_key_features_mobile.png"
                    width={1920}
                    height={1080}
                    draggable={false}
                    className="mix-blend-screen max-w-[330px] w-full mx-auto md:hidden select-none"
                />
            </div>
        </div>
    );
};

export default KeyFeaturesSection;
