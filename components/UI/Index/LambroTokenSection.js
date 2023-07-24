import Container from "@/components/Layout/Container";
import BlurCurlyCircleSvg from "@/components/SvgComponents/BlurCurlyCircleSvg";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import React from "react";

const LambroTokenSection = () => {
    return (
        <div className="relative" id="token">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 items-center pt-32">
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
                            <span> 69,420,000,000</span>
                        </div>
                        <div className="flex items-center gap-1 text-lg flex-wrap">
                            <GradientTextSmallHeading className="font-normal !text-[18px]">
                                Circulating supply (at launch):
                            </GradientTextSmallHeading>
                            <span> 41.65B (5% at launch and working our way to 60% circulating)</span>
                        </div>
                        <p className="mt-4">
                            Remaining 40% reserved for development, marketing, team, advisors, and reserve fund Gradual
                            introduction of reserved tokens based on roadmap milestones Promoting healthy price growth
                            and stability
                        </p>
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
