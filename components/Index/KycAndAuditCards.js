import React from "react";
import HexagonalCubesSvg from "../SvgComponents/HexagonalCubesSvg";
import Container from "../Layout/Container";
import { GradientTextSmallHeading } from "../widgets/StyledComponents";

const KycAndAuditCards = () => {
    return (
        <Container>
            {/* Background Image */}
            <HexagonalCubesSvg />

            {/* GRID CONTAINER */}
            <div>
                <div>
                    {/* 2 col span div */}
                    <GradientTextSmallHeading className="text-[28px]">
                        Check here our KYC and Audit
                    </GradientTextSmallHeading>
                    <p className="relative text-[20px] leading-[30px] font-inter mt-7">
                        KYC and audits ensure compliance, accountability, and trust through identity verification, risk
                        mitigation, and independent evaluations.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default KycAndAuditCards;
