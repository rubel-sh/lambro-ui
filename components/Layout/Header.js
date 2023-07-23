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
                        <li className="text-white text-[15px] font-medium">About</li>
                        <li className="text-white text-[15px] font-medium">Purpose</li>
                        <li className="text-white text-[15px] font-medium">Token</li>
                        <li className="text-white text-[15px] font-medium">Features</li>
                        <li className="text-white text-[15px] font-medium">Academy</li>
                        <li className="text-white text-[15px] font-medium">Roadmap</li>
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
                    <div className=" p-2 bg-[#23252a] absolute right-0 top-full rounded-lg lg:hidden">
                        <ul className=" justify-start gap-y-5 flex flex-col   ">
                            <li className=" text-[15px] font-medium">
                                <HeaderLink href={"#"}>About</HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink href={"#"}>Purpose</HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink href={"#"}>Token</HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink href={"#"}>Features</HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink href={"#"}>Academy</HeaderLink>
                            </li>
                            <li className=" text-[15px] font-medium">
                                <HeaderLink href={"#"}>Roadmap</HeaderLink>
                            </li>
                            <button className=" bg-indigo-900 rounded-[10px]  border border-indigo-900 justify-start items-start gap-2.5 flex  text-[15px] font-medium ">
                                <HeaderLink href={"#"}>Contact Us</HeaderLink>
                            </button>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

const HeaderLink = ({ children, href }) => {
    return (
        <Link
            href={href}
            className="text-[14px] text-[#bcbdbe] font-konnect font-medium block px-6 py-3 pr-16 hover:bg-[#1e1f24] rounded-lg"
        >
            {children}
        </Link>
    );
};

export default Header;
