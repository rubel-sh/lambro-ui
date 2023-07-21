import Container from "@/components/Layout/Container";
import FacebookIconSvg from "@/components/SvgComponents/FacebookIconSvg";
import InstagramIconSvg from "@/components/SvgComponents/InstagramIconSvg";
import TwitterIconSvg from "@/components/SvgComponents/TwitterIconSvg";
import ActionButton from "@/components/widgets/ActionButton";
import { GradientTextMediumHeading, GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LambroFooter = () => {
    return (
        <div className=" mt-[120px]">
            <Container>
                {/* Upper Part */}
                <div className="flex flex-col items-center pb-10">
                    <GradientTextMediumHeading className="mb-8">Want to know more</GradientTextMediumHeading>
                    <div className="max-w-[580px] text-[16px] md:text-[20px] mb-11 text-center">
                        Contact us via email or any of our social channels to get to know us, Lambro and the community
                    </div>
                    <ActionButton comment>Contact Us</ActionButton>
                </div>
                {/* Bottom Part */}
                <div className="border-t-[1px] border-[#37353d]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 gap-y-5 mb-11">
                        {/* General */}
                        <div>
                            <FooterTitle>General</FooterTitle>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <FooterLink href="#">Terms & Conditions</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="#">Privacy Policy</FooterLink>
                                </li>
                            </ul>
                        </div>
                        {/* Contact */}
                        <div>
                            <FooterTitle>Contact</FooterTitle>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <FooterLink href="#">Medium</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="#">Linkedin</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="#">Telegram</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="#">Discord</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="#">Reddit</FooterLink>
                                </li>
                            </ul>
                        </div>

                        {/* Projects */}
                        <div>
                            <FooterTitle>Projects</FooterTitle>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <FooterLink href="#">Stacking</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="#">Academy</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="#">Lambro Contract</FooterLink>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <FooterTitle>Social Media</FooterTitle>
                            <div className="flex items-center gap-x-6 mt-2">
                                <Link href="#">
                                    <FacebookIconSvg />
                                </Link>
                                <Link href="#">
                                    <TwitterIconSvg />
                                </Link>
                                <Link href="#">
                                    <InstagramIconSvg />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Lambro Images */}
                    <div className="flex flex-col items-center pb-8">
                        <Image
                            src="/assets/img/lambro-logo-big.png"
                            alt="Lambro Token"
                            width={250}
                            height={180}
                            className="w-[150px]"
                        />
                        <p className="text-base mt-6 text-center">
                            © 2023 <span className="text-[#5b42cc] font-semibold">Lambro.io</span> All rights reserved.{" "}
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

const FooterTitle = ({ children }) => {
    return <div className="text-[16px] lg:text-lg text-[#cbb8e4] font-konnect font-medium">{children}</div>;
};

const FooterLink = ({ children, href }) => {
    return (
        <Link href={href} className="text-[14px] text-[#847797] font-konnect font-medium">
            {children}
        </Link>
    );
};

export default LambroFooter;
