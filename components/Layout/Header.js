import React, { useState } from "react";
import HamMenuSvg from "../SvgComponents/HamMenuSvg";
import Link from "next/link";
import useCloseOnClickOutside from "@/hooks/useCloseOnClickOutside";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [popupRef] = useCloseOnClickOutside(setIsOpen);

    return (
        <>
            <nav ref={popupRef} className="relative z-20 ">
                <div className="h-20  justify-between items-center  flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <img src="/assets/img/lambro-logo-name.png" />
                    </div>
                    <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
                        <HamMenuSvg />
                    </div>
                    <ul className="hidden  justify-start items-center gap-6 lg:flex">
                        <li className="text-white text-[15px] font-medium">
                            <Link href={"#about"}>About</Link>
                        </li>
                        <li className="text-white text-[15px] font-medium">
                            <Link href="#purpose">Purpose</Link>
                        </li>
                        <li className="text-white text-[15px] font-medium">
                            <Link href="#token">Token</Link>
                        </li>
                        <li className="text-white text-[15px] font-medium">
                            <Link href="#features">Features</Link>
                        </li>
                        <li className="text-white text-[15px] font-medium">
                            <Link target="_blank" href="https://lambro.academy/">
                                Academy
                            </Link>
                        </li>
                        <li className="text-white text-[15px] font-medium">
                            <Link href="#roadmap">Roadmap</Link>
                        </li>
                        <Link
                            href="mailto:bro@lambro.io"
                            className="px-5 py-2.5 bg-indigo-900 rounded-[10px] border border-indigo-900 justify-start items-start gap-2.5 flex text-white text-[15px] font-medium"
                        >
                            Contact Us
                        </Link>
                    </ul>
                </div>

                {/* Mobile Drawer Menu */}
                {isOpen && (
                    <div className=" px-6 py-7 bg-[#23252a] bg-gradient-to-tr from-[#1c1829] via-[#1b1c20] to-[#15131f]   absolute right-0 top-full rounded-lg lg:hidden  ">
                        {/* <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-4 border-gray-300"></div> */}
                        <ul className=" justify-start gap-y-5 flex flex-col   ">
                            <li className=" text-[15px] font-medium">
                                <HeaderLink setIsOpen={setIsOpen} href={"#about"}>
                                    About
                                </HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink setIsOpen={setIsOpen} href={"#purpose"}>
                                    Purpose
                                </HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink setIsOpen={setIsOpen} href={"#token"}>
                                    Token
                                </HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink setIsOpen={setIsOpen} href={"#features"}>
                                    Features
                                </HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink setIsOpen={setIsOpen} href={"https://lambro.academy/"} noBlank>
                                    Academy
                                </HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink setIsOpen={setIsOpen} href={"#roadmap"}>
                                    Roadmap
                                </HeaderLink>
                            </li>
                            <button className=" bg-indigo-900 rounded-[10px]  border border-indigo-900 justify-start items-start gap-2.5 flex  text-[15px] font-medium ">
                                <HeaderLink setIsOpen={setIsOpen} href="mailto:bro@lambro.io">
                                    Contact Us
                                </HeaderLink>
                            </button>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

const HeaderLink = ({ children, href, noBlank, setIsOpen }) => {
    return (
        <Link
            onClick={() => setIsOpen(false)}
            target={noBlank ? "_blank" : "_self"}
            href={href}
            className="text-[14px] text-[#bcbdbe] font-konnect font-medium block px-6 py-3 pr-16 hover:bg-[#1e1f24] rounded-lg"
        >
            {children}
        </Link>
    );
};

export default Header;
