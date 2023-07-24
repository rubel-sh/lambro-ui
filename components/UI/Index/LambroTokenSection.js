import Container from "@/components/Layout/Container";
import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import { GradientTextSmallHeading, TextPrimary } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const LambroTokenSection = () => {
    return (
        <div className="relative" id="token">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 items-center pt-[66px] lg:pt-[180px]">
                    {/* Image */}
                    <div className="relative mx-auto">
                        <Image src="/assets/img/lambro-logo-big.png" alt="Lambro Token" width={500} height={500} />
                    </div>
                    {/* Texts */}
                    <div>
                        <GradientTextSmallHeading className="font-semibold">Token - LAMBRO</GradientTextSmallHeading>
                        <div className="flex items-center gap-1 text-lg mt-5">
                            <GradientTextSmallHeading className="font-normal !text-[18px]">
                                Total supply:
                            </GradientTextSmallHeading>
                            <TextPrimary> 69,420,000,000</TextPrimary>
                        </div>
                        <div className="flex items-center gap-1 text-lg flex-wrap">
                            <GradientTextSmallHeading className="font-normal !text-[18px]">
                                Circulating supply (at launch):
                            </GradientTextSmallHeading>
                            <TextPrimary> 41.65B (5% at launch and working our way to 60% circulating)</TextPrimary>
                        </div>
                        <TextPrimary className="mt-4">
                            Remaining 40% reserved for development, marketing, team, advisors, and reserve fund <br />
                            Gradual introduction of reserved tokens based on roadmap milestones <br />
                            Promoting healthy price growth and stability
                        </TextPrimary>
                    </div>
                </div>
            </Container>
            <div className="hidden lg:block absolute top-0 -left-1/4 -translate-y-1/3  -z-10 w-[200px]">
                <BlurCurlyCircleSvg />
            </div>
        </div>
    );
};

export default LambroTokenSection;
