import React from "react";
import RightArrowSvg from "../SvgComponents/RightArrowSvg";
import GlowingLineSvg from "../SvgComponents/GlowingLineSvg";

const ActionButton = ({ children, arrow = false, comment = false }) => {
    return (
        <button className="group cursor-pointer relative flex items-center justify-center gap-x-3 text-white border-[2px] border-[#9c86ff] bg-gradient-to-t from-[#896EFD] to-[#6B4AFC] text-[16px] lg:text-lg font-medium leading-[17px] px-[16px] py-[10px] lg:px-12 lg:py-5 rounded-[10px] font-konnect ">
            <div className="transition-all hover:duration-500 absolute top-0 right-3 group-hover:right-10 -translate-y-1/2">
                <GlowingLineSvg />
            </div>
            {children}
            <div className="transition-all hover:duration-500 absolute bottom-0 left-3 group-hover:left-10 translate-y-1/2">
                <GlowingLineSvg />
            </div>
            {arrow && <RightArrowSvg />}
            {comment && <div className="w-6 h-6 relative" />}
        </button>
    );
};

export default ActionButton;
