import React from "react";

const GlowingLineSvg = () => {
    return (
        <svg width="66" height="13" viewBox="0 0 66 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_23_12)">
                <ellipse cx="33" cy="6.07143" rx="29" ry="2.07143" fill="#B79DFF" />
            </g>
            <defs>
                <filter
                    id="filter0_f_23_12"
                    x="0"
                    y="0"
                    width="66"
                    height="12.1429"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_23_12" />
                </filter>
            </defs>
        </svg>
    );
};

export default GlowingLineSvg;
