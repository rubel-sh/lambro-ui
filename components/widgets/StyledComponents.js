export const GradientTextLargeHeading = ({ children, className }) => {
    return (
        <h2
            className={` bg-clip-text font-konnect text-transparent bg-gradient-to-t from-[#C9BDFF] via-[#7C67D9]  to-[#6349D6] text-[35px] xl:text-[76px] leading-tight  ${className}`}
        >
            {children}
        </h2>
    );
};

export const GradientTextMediumHeading = ({ children, className }) => {
    return (
        <h2
            className={` bg-clip-text font-konnect text-transparent bg-gradient-to-t from-[#C9BDFF] via-[#7C67D9]  to-[#6349D6] text-[28px] xl:text-[74px] leading-tight  ${className}`}
        >
            {children}
        </h2>
    );
};

export const GradientTextSmallHeading = ({ children, className }) => {
    return (
        <h2
            className={` bg-clip-text font-konnect text-transparent bg-gradient-to-t from-[#C9BDFF] via-[#7C67D9]  to-[#6349D6] text-[28px] xl:text-[44px] leading-tight ${className}`}
        >
            {children}
        </h2>
    );
};

export const GradientTextCardTitle = ({ children, className }) => {
    return (
        <h2
            className={` bg-clip-text font-konnect text-transparent bg-gradient-to-t from-[#C9BDFF] via-[#7C67D9]  to-[#6349D6] text-[16px] xl:text-[20px] leading-tight  ${className}`}
        >
            {children}
        </h2>
    );
};
