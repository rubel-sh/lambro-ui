import React from "react";
import HexagonalCubesSvg from "../../SvgComponents/HexagonalCubesSvg";
import Container from "../../Layout/Container";
import { GradientTextSmallHeading } from "../../widgets/StyledComponents";
import GenericCard from "./GenericCard";

const KycAndAuditCardsSection = () => {
    return (
        <div className="relative ">
            {/* Background Image */}
            <div className="absolute top-0 w-full -z-10">
                <HexagonalCubesSvg />
            </div>
            <Container className="pt-24">
                {/* GRID CONTAINER */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="md:col-span-2">
                        {/* 2 col span div */}
                        <GradientTextSmallHeading className="text-[28px] max-w-[500px] font-semibold">
                            KYC, Audits & Trackers: <span className="text-lg">Ensuring Transparency and Security</span>
                        </GradientTextSmallHeading>
                        <p className="relative text-[20px] leading-[30px] font-inter mt-7">
                            Lambro is committed to providing a secure, transparent, and trustworthy platform for our
                            community. To ensure this, we've prioritized stringent auditing processes and implemented
                            Know Your Customer (KYC) verifications
                        </p>
                    </div>
                    <GenericCard
                        glowColor="#6a60fe"
                        image={"/assets/img/search-hexagonal-icon.png"}
                        title={"KYC Certification"}
                        desc={"Verification of customer identities to comply with regulations and prevent fraud."}
                    />
                    <GenericCard
                        glowColor="#fb3b32"
                        image={"/assets/img/inscope-hexagonal-icon.png"}
                        title={"In Coinscope"}
                        desc={"Platform for tracking and analyzing cryptocurrencies in real-time."}
                    />
                    <GenericCard
                        glowColor="#92c462"
                        image={"/assets/img/cyperscope-hexagonal-icon.png"}
                        title={"In Cyberscope"}
                        desc={"Comprehensive system for monitoring and managing cybersecurity risks."}
                    />
                    <GenericCard
                        glowColor="#1ba1fd"
                        image={"/assets/img/checkdot-hexagonal-icon.png"}
                        title={"In Checkdot"}
                        desc={"Insufficient information available to provide a concise description."}
                    />
                </div>
            </Container>
        </div>
    );
};

export default KycAndAuditCardsSection;
