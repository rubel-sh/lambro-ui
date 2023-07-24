import React from "react";

const TeamCardSvg = () => {
    return (
        <svg viewBox="0 0 305 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_99_247)">
                <path
                    d="M20.3733 0L0 23.4297V361.57L20.3733 385H284.627L305 361.57V23.4297L284.627 0H20.3733Z"
                    fill="url(#paint0_linear_99_247)"
                    className="min-h-[600px]"
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_99_247"
                    x="-14"
                    y="-14"
                    width="333"
                    height="413"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="7" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_99_247" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_99_247" result="shape" />
                </filter>
                <linearGradient
                    id="paint0_linear_99_247"
                    x1="141.046"
                    y1="0"
                    x2="141.046"
                    y2="189.24"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#2D2743" stopOpacity="0.67" />
                    <stop offset="0.0001" stopColor="#2E3547" stopOpacity="0.3" />
                    <stop offset="1" stopColor="#2E3547" stopOpacity="0.3" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default TeamCardSvg;
