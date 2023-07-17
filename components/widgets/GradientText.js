import React from "react";

const GradientText = ({ children, className }) => {
    return (
        <h2
            className={` bg-clip-text font-konnect text-transparent bg-gradient-to-t from-[#C9BDFF] via-[#7C67D9]  to-[#6349D6] text-[35px] xl:text-[76px] leading-tight xl:leading-[90px] ${className}`}
        >
            {children}
        </h2>
    );
};

export default GradientText;
