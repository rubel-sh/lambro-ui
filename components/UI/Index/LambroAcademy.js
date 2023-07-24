import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const LambroAcademy = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-y-10 mt-10 relative" id="academy">
            {/* Left Texts */}
            <div className="lg:justify-self-end">
                <div>
                    <GradientTextSmallHeading>Lambro Academy</GradientTextSmallHeading>
                    <GradientTextSmallHeading className="!text-[20px]">
                        Empowering the Crypto Community with Knowledge
                    </GradientTextSmallHeading>
                </div>
                <div className="lg:mt-8 lg:space-y-5 max-w-[650px] text-lg  mt-4">
                    <p>
                        The Lambro Academy is a cornerstone of the Lambro project, embodying our commitment to education
                        and empowerment. We believe that knowledge is a critical tool for individual and collective
                        growth. As the crypto world continues to evolve, we want our community to have the tools and
                        understanding they need to thrive.
                    </p>
                    <p>
                        The Academy offers a wide range of courses and materials tailored to various skill levels.
                        Whether you're a crypto novice seeking to understand the basics or an experienced trader looking
                        to refine your strategies, we've got you covered. Our course topics span from the fundamentals
                        of blockchain technology to more complex themes such as DeFi, tokenomics, and crypto trading
                        strategies.
                    </p>
                    <p>
                        We're also pushing the boundaries of learning through the integration of AI-assisted chatbots.
                        These cutting-edge tools serve as personal tutors, guiding you through course materials and
                        providing 24/7 assistance.
                    </p>
                    <p>
                        At the Lambro Academy, we're democratizing crypto education. We're tearing down the walls of
                        complexity and jargon to make crypto education accessible, engaging, and fun. Join us in the
                        Academy, where learning meets empowerment.
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
            <div className="absolute top-0 right-0  -translate-y-72 -z-10  ">
                <BlurCurlyCircleSvg />
            </div>
        </div>
    );
};

export default LambroAcademy;
