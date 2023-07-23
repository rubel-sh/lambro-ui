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
                    <GradientTextMediumHeading className="mb-8">Want to Know More?</GradientTextMediumHeading>
                    <div className="max-w-[580px] text-[16px] md:text-[20px] mb-11 text-center">
                        Contact us via email or any of our social channels to get to know us, Lambro and the community
                    </div>
                    <ActionButton comment href="mailto:bro@lambro.io">
                        Contact Us
                    </ActionButton>
                </div>
                {/* Bottom Part */}
                <div className="border-t-[1px] border-[#37353d]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 gap-y-5 mb-11">
                        {/* General */}
                        <div>
                            <FooterTitle>General</FooterTitle>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <FooterLink href="https://lambro.gitbook.io/lambro/policies/terms-and-conditions">
                                        Terms & Conditions
                                    </FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://lambro.gitbook.io/lambro/policies/privacy-policy">
                                        Privacy Policy
                                    </FooterLink>
                                </li>
                            </ul>
                            {/* Social Media */}
                            <div className="mt-5">
                                <FooterTitle>Social Media</FooterTitle>
                                <div className="flex items-center gap-x-6 mt-2">
                                    <Link target="_blank" href="https://facebook.com/lambrotoken">
                                        <FacebookIconSvg />
                                    </Link>
                                    <Link target="_blank" href="https://twitter.com/lambrotoken">
                                        <TwitterIconSvg />
                                    </Link>
                                    <Link target="_blank" href="https://www.instagram.com/lambrotoken/">
                                        <InstagramIconSvg />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Contact */}
                        <div>
                            <FooterTitle>Contact</FooterTitle>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <FooterLink href="https://medium.com/@lambrotoken">Medium</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://www.linkedin.com/company/lambrotoken/">
                                        Linkedin
                                    </FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://t.me/+UP2jGlI2dhdmYzg0">Telegram</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://discord.gg/G2GKn7mS">Discord</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://www.reddit.com/r/lambro/">Reddit</FooterLink>
                                </li>
                            </ul>
                        </div>

                        {/* Projects */}
                        <div>
                            <FooterTitle>Projects</FooterTitle>
                            <ul className="mt-2 space-y-1">
                                <li>
                                    <FooterLink href="https://lambrostaking.io/">Stacking</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://lambro.academy/">Academy</FooterLink>
                                </li>
                                <li>
                                    <FooterLink href="https://bscscan.com/token/0x201AF44d9DfA5464F20B8dD8aA96Fc016d26E7C0">
                                        Lambro Contract
                                    </FooterLink>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="">
                            <FooterTitle>Scanners & Trackers</FooterTitle>
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
        <Link href={href} target="_blank" className="text-[14px] text-[#847797] font-konnect font-medium">
            {children}
        </Link>
    );
};

export default LambroFooter;
