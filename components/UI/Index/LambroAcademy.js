import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const LambroAcademy = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-y-10 mt-10 relative">
            {/* Left Texts */}
            <div className="lg:justify-self-end">
                <GradientTextSmallHeading>Lambro Academy</GradientTextSmallHeading>
                <div className="lg:mt-8 lg:space-y-5 max-w-[650px] text-lg  mt-4">
                    <p>
                        As a Lambro token holder, you gain access to premium content and features on Lambro.Academy.
                        Learn from industry experts about online businesses and relevant topics to enhance your
                        knowledge. Join the vibrant Lambro Academy today and expand your understanding of the digital
                        economy and cryptocurrency.
                    </p>
                    <GradientTextSmallHeading className="!text-[18px] lg:!text-[24px] !font-semibold pt-5">
                        LEARN TO EARN?
                    </GradientTextSmallHeading>
                    <p>
                        Lambro Academy merges the Lambro community, fostering collective knowledge and engagement.
                        Members contribute through sharing, creating, and reviewing content. Discussions enhance the
                        learning experience, and contributions are rewarded. Token holders access resources and join a
                        supportive community focused on active participation and growth.
                    </p>
                </div>
            </div>
            {/* right images */}
            <div className="justify-self-center self-start">
                <Image
                    src={"/assets/img/lambro_academy_image.png"}
                    width={600}
                    height={600}
                    className="lg:translate-y-10 lg:-translate-x-10"
                />
            </div>
            <div className="absolute top-0 right-0  -translate-y-52 -z-10 ">
                <BlurCurlyCircleSvg />
            </div>
        </div>
    );
};

export default LambroAcademy;
