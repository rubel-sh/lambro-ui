import LambroRoadmapBgSvg from "@/components/SvgComponents/LambroRoadmapBgSvg";
import Image from "next/image";
import React from "react";

const LambroRoadmapSection = () => {
    return (
        <div className="min-w-[600px]">
            {/* BACKGROUND IMAGE */}
            <div>
                <Image src="/assets/img/LambroRoadmapBg.png" alt="" width={600} height={600} />
            </div>
        </div>
    );
};

export default LambroRoadmapSection;
