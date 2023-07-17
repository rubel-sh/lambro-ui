import React from "react";
import HamMenuSvg from "../SvgComponents/HamMenuSvg";

const Header = () => {
    return (
        <>
            <nav className="relative z-10">
                <div className="h-20  justify-between items-center  flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <img src="/assets/img/lambro-logo-name.png" />
                    </div>
                    <div className="lg:hidden cursor-pointer">
                        <HamMenuSvg />
                    </div>
                    <ul className="hidden  justify-start items-center gap-6 lg:flex">
                        <li className="text-white text-opacity-70 text-[15px] font-medium">About</li>
                        <li className="text-white text-opacity-70 text-[15px] font-medium">Purpose</li>
                        <li className="text-white text-opacity-70 text-[15px] font-medium">Token</li>
                        <li className="text-white text-opacity-70 text-[15px] font-medium">Features</li>
                        <li className="text-white text-opacity-70 text-[15px] font-medium">Academy</li>
                        <li className="text-white text-opacity-70 text-[15px] font-medium">Roadmap</li>
                        <button className="px-5 py-2.5 bg-indigo-900 rounded-[10px] border border-indigo-900 justify-start items-start gap-2.5 flex text-white text-[15px] font-medium">
                            Contact Us
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
