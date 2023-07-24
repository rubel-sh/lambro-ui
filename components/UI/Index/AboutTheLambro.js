import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import {
    GradientTextMediumHeading,
    GradientTextSmallHeading,
    TextPrimary,
} from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const AboutTheLambro = () => {
    return (
        <div className="grid  lg:grid-cols-2 relative " id="about">
            {/* Left Texts */}
            <div className="justify-self-center  lg:justify-self-end order-2 lg:order-1">
                <GradientTextSmallHeading>About Lambro</GradientTextSmallHeading>
                <div className="lg:mt-8 mt-4 space-y-5 max-w-[650px]">
                    <TextPrimary>
                        In an increasingly digital world, the advent of cryptocurrencies has revolutionized how value is
                        created, distributed, and stored. Since the creation of Bitcoin, the first decentralized
                        cryptocurrency, this sector has grown exponentially. It's now teeming with a variety of tokens,
                        each offering their unique proposition and value. Among these, meme coins have carved out a
                        significant niche, capturing the public's imagination with their humor and community-driven
                        approach.
                    </TextPrimary>
                    <TextPrimary>
                        While this novel class of cryptocurrencies is fascinating, a common criticism has been their
                        lack of tangible utility. This is where Lambro steps in. As a proud entrant in the world of meme
                        coins, Lambro recognizes the need for practical use-case and tangible benefits for holders.
                        Thus, Lambro isn't just another token on the blockchain; it's a vibrant community and an
                        ecosystem of learning. Lambro is designed to add value to its holders' lives beyond potential
                        financial gains.
                    </TextPrimary>
                    <TextPrimary>
                        By integrating with the Lambro Academy, an innovative online learning platform, Lambro offers
                        its holders an opportunity to learn about the digital economy, online businesses, and more. This
                        commitment to education sets Lambro apart, by intertwining entertainment and learning, we're
                        making complex financial concepts accessible and digestible for everyone. Join us in driving the
                        future of crypto education
                    </TextPrimary>
                </div>
            </div>
            {/* right images */}
            <div className="lg:justify-self-start justify-self-center lg:self-end order-1 lg:order-2">
                <Image
                    src={"/assets/img/aboutLambroImage.png"}
                    width={600}
                    height={600}
                    className="translate-y-0 lg:translate-y-20  -translate-x-5 lg:-translate-x-10"
                />
            </div>
            <div className="absolute top-0 right-0  -translate-y-52 -z-10 ">
                <BlurCurlyCircleSvg />
            </div>
        </div>
    );
};

export default AboutTheLambro;
