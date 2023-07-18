import React from "react";
import HexagonalCubesSvg from "../../SvgComponents/HexagonalCubesSvg";
import Container from "../../Layout/Container";
import { GradientTextSmallHeading } from "../../widgets/StyledComponents";
import GenericCard from "./GenericCard";

const KycAndAuditCards = () => {
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
                            Check here our KYC and Audit
                        </GradientTextSmallHeading>
                        <p className="relative text-[20px] leading-[30px] font-inter mt-7">
                            KYC and audits ensure compliance, accountability, and trust through identity verification,
                            risk mitigation, and independent evaluations.
                        </p>
                    </div>
                    <GenericCard
                        image={"/assets/img/search-hexagonal-icon.png"}
                        title={"KYC Certification"}
                        desc={"Verification of customer identities to comply with regulations and prevent fraud."}
                    />
                    <GenericCard
                        image={"/assets/img/search-hexagonal-icon.png"}
                        title={"KYC Certification"}
                        desc={"Verification of customer identities to comply with regulations and prevent fraud."}
                    />
                    <GenericCard
                        image={"/assets/img/search-hexagonal-icon.png"}
                        title={"KYC Certification"}
                        desc={"Verification of customer identities to comply with regulations and prevent fraud."}
                    />
                    <GenericCard
                        image={"/assets/img/search-hexagonal-icon.png"}
                        title={"KYC Certification"}
                        desc={"Verification of customer identities to comply with regulations and prevent fraud."}
                    />
                </div>
            </Container>
        </div>
    );
};

export default KycAndAuditCards;
