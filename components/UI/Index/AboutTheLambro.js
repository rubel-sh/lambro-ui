import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import { GradientTextMediumHeading, GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const AboutTheLambro = () => {
    return (
        <div className="grid  lg:grid-cols-2 relative ">
            {/* Left Texts */}
            <div className="justify-self-center  lg:justify-self-end">
                <GradientTextSmallHeading>About The Lambro</GradientTextSmallHeading>
                <div className="lg:mt-8 mt-4 space-y-5 max-w-[650px]">
                    <p>
                        Cryptocurrencies like Bitcoin have transformed digital value generation and storage. Meme coins
                        have gained popularity for entertainment and community engagement. However, meme coins often
                        lack practical utility. Lambro sets itself apart by providing tangible benefits.
                    </p>
                    <p>
                        Lambro is not just another meme coin; it offers the Lambro Academy for education in the digital
                        economy. Its investor-friendly tokenomics model redistributes value to holders, ensuring
                        stability and rewarding long-term holding. Choose Lambro for a unique meme coin experience that
                        combines education, community, and financial benefits.
                    </p>
                </div>
            </div>
            {/* right images */}
            <div className="lg:justify-self-start justify-self-center lg:self-end ">
                <Image
                    src={"/assets/img/aboutLambroImage.png"}
                    width={600}
                    height={600}
                    className=" lg:translate-y-20 translate-y-10 -translate-x-10"
                />
            </div>
            <div className="absolute top-0 right-0  -translate-y-52 -z-10 ">
                <BlurCurlyCircleSvg />
            </div>
        </div>
    );
};

export default AboutTheLambro;
