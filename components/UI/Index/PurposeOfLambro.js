import BlurCircleSvg from "@/components/SvgComponents/BlurCircleSvg";
import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const PurposeOfLambro = () => {
    const purposeOfLambro = [
        "Lambro is not just another meme token in the cryptocurrency space. It offers genuine purpose and a unique value proposition, combining community and humor with practical use-case.",
        "Lambro's main goal is to bridge the gap between cryptocurrency and the public by providing an online learning platform through Lambro.Academy.",
        "Holding Lambro allows investors to gain financial rewards and access premium educational content, enabling them to grow with the digital landscape.",
        "The Lambro ecosystem empowers individuals, transforming novice investors into knowledgeable participants in the cryptocurrency world.",
    ];
    return (
        <div className="grid lg:grid-cols-2 gap-y-10 relative">
            {/* Left */}
            <div className="justify-self-end self-start  order-2 lg:order-1">
                <Image
                    src={"/assets/img/purpose_of_lambro_image.png"}
                    width={600}
                    height={600}
                    className="lg:-translate-y-28 lg:-translate-x-10"
                />
            </div>
            {/* Right */}
            <div className="justify-self-start self-end order-1 lg:order-2">
                <GradientTextSmallHeading className="mb-5 lg:mb-0">Purpose of Lambro</GradientTextSmallHeading>
                {purposeOfLambro.map((item, index) => (
                    <div className="flex items-center text-lg max-w-[690px]">
                        <div className="grid place-items-center">
                            <h2 className="absolute text-[50px] lg:text-[80px]  font-black text-[#30293c] ml-4 mt-1">
                                {++index}
                            </h2>
                            <div className="w-[80px] h-[80px] lg:w-[110px] lg:h-[110px]">
                                <BlurCircleSvg />
                            </div>
                        </div>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            <div className="absolute top-0 left-0  -translate-y-52 hidden xl:block -z-10 ">
                <BlurCurlyCircleSvg />
            </div>
        </div>
    );
};

export default PurposeOfLambro;
