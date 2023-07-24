import React from "react";
import AboutTheLambro from "./AboutTheLambro";
import PurposeOfLambro from "./PurposeOfLambro";
import LambroAcademy from "./LambroAcademy";

const ThingsAboutLambroSection = () => {
    return (
        <div className="pt-[67px] lg:pt-32 px-5 space-y-20">
            <AboutTheLambro />
            <PurposeOfLambro />
            <LambroAcademy />
        </div>
    );
};

export default ThingsAboutLambroSection;
