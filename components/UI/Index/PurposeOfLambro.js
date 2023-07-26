import BlurCircleSvg from "@/components/SvgComponents/BlurCircleSvg";
import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import { GradientTextSmallHeading, TextPrimary } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const PurposeOfLambro = () => {
    const purposeOfLambro = [
        "Lambro is more than just a crypto token; it is an ecosystem designed to empower individuals to take control of their financial futures. We're passionate about making complex financial and technological concepts accessible to everyone, regardless of their background or experience level.",
        `Our primary purpose is to provide education and resources through the Lambro Academy. 
        Here, we break down barriers to financial literacy with an accessible, engaging learning platform. Our courses and materials equip our community with the knowledge and skills they need to navigate the complex digital world confidently.`,
        `Beyond education, Lambro is driven by innovation. We constantly explore new ways to provide real-world utility to our token. Whether it's through staking opportunities or integration with other platforms, we're dedicated to ensuring Lambro continues to provide value to our community.
        `,
        "Above all, Lambro is a project built for a community, not the other way around. We're here to build a space where anyone can learn, grow, and become an active participant in the cryptocurrency world. By fostering a robust, engaged community that should feel like a family, we believe we can inspire a wealth-building revolution.",
    ];
    return (
        <div className="grid lg:grid-cols-2 gap-y-10 relative " id="purpose">
            {/* Left */}
            <div className="justify-self-end self-center  ">
                <Image
                    src={"/assets/img/purpose_of_lambro_image.png"}
                    width={600}
                    height={600}
                    className="lg:-translate-y-20 lg:-translate-x-8"
                />
            </div>
            {/* Right */}
            <div className="justify-self-start self-end ">
                <div>
                    <GradientTextSmallHeading className="text-[28px] max-w-[500px] font-semibold mb-1">
                        Purpose of Lambro
                    </GradientTextSmallHeading>
                    <GradientTextSmallHeading className="!text-[16px] lg:!text-[20px] !font-normal">
                        Inspiring Wealth-Building Through Knowledge and Innovation
                    </GradientTextSmallHeading>
                </div>
                <div className="mt-8 space-y-4 lg:space-y-6">
                    {purposeOfLambro.map((item, index) => (
                        <div key={index} className="flex items-center text-lg max-w-[690px]">
                            <div className="self-start translate-y-5">
                                <div className="grid place-items-center">
                                    <h2 className="justify-self-start text-[34px] lg:text-[96px] font-konnect font-black text-[#D8C4F3] text-opacity-50 lg:text-opacity-30 md:ml-4 mt-1 -z-10 min-w-[40px] lg:min-w-[67px]">
                                        {++index}
                                    </h2>
                                    <div className="absolute w-[50px] h-[50px] lg:w-[110px] lg:h-[110px] -translate-x-14 -translate-y-10 lg:-translate-x-5 lg:-translate-y-4">
                                        <BlurCircleSvg />
                                    </div>
                                </div>
                            </div>
                            <TextPrimary>{item}</TextPrimary>
                        </div>
                    ))}
                    <GradientTextSmallHeading className="!text-[14px] lg:!text-[20px]">
                        Join us on this exciting journey!
                    </GradientTextSmallHeading>
                </div>
            </div>
            <div className="absolute top-0 left-0  -translate-y-52 hidden xl:block -z-10 ">
                <BlurCurlyCircleSvg />
            </div>
        </div>
    );
};

export default PurposeOfLambro;
