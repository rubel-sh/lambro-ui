import BlurCircleSvg from "@/components/SvgComponents/BlurCircleSvg";
import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
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
            <div className="justify-self-end self-center  order-2 lg:order-1">
                <Image
                    src={"/assets/img/purpose_of_lambro_image.png"}
                    width={600}
                    height={600}
                    className="lg:-translate-y-20 lg:-translate-x-8"
                />
            </div>
            {/* Right */}
            <div className="justify-self-start self-end order-1 lg:order-2">
                <div>
                    <GradientTextSmallHeading className="mb-5 lg:mb-0">Purpose of Lambro:</GradientTextSmallHeading>
                    <GradientTextSmallHeading className="!text-[20px]">
                        Inspiring Wealth-Building Through Knowledge and Innovation
                    </GradientTextSmallHeading>
                </div>
                <div className="mt-12 space-y-8">
                    {purposeOfLambro.map((item, index) => (
                        <div key={index} className="flex items-center text-lg max-w-[690px]">
                            <div className="grid place-items-center ">
                                <h2 className="absolute text-[50px] lg:text-[80px] font-konnect font-black text-[#30293c] ml-4 mt-1 -z-10">
                                    {++index}
                                </h2>
                                <div className="w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] -translate-x-1 -translate-y-2">
                                    <BlurCircleSvg />
                                </div>
                            </div>
                            <p>{item}</p>
                        </div>
                    ))}
                    <GradientTextSmallHeading className="!text-[20px]">
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
