import { teamsConstant } from "@/constants/teamMemberInfo";
import { useTeamModalContext } from "@/context/TeamModalProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rodal from "rodal";
import { RxCross2 } from "react-icons/rx";

const TeamModal = () => {
    const { isOpen, setIsOpen, selectedTeam } = useTeamModalContext();
    const teams = teamsConstant;
    const selectedTeamMember = teams[selectedTeam];
    const handleCloseModal = () => {
        setIsOpen(false);
    };

    /* 
    
      name: 'Svava Heiðarsdóttir',
    position: 'COO, Financial Manager & Project Manager',
    image: '/assets/img/team_members/Svava_Heiðarsdóttir.png',
    telegram: '',
    linkedIn: 'https://www.linkedin.com/in/svava-hei%C3%B0arsd%C3%B3ttir-376415280/',
    bio: [

    */
    return (
        <Rodal
            visible={isOpen}
            onClose={handleCloseModal}
            showCloseButton={false}
            measure="px"
            // width={1120}
            // height={600}
            customStyles={{
                backgroundColor: "transparent",
                boxShadow: "none",
                width: "min(98vw, 1100px)",
                height: "650px",
                borderRadius: "1.5rem",
            }}
            className="bg-[#191528] bg-opacity-50 backdrop-blur-lg !p-0 "
        >
            <div className="bg-[#191528] rounded-3xl p-5 md:p-8 lg:p-10 ">
                <div className="flex justify-between items-start">
                    <h2 className="text-white text-[22px] font-bold mb-10">Team Information</h2>
                    {/* <button onClick={handleCloseModal}>Close Modal</button> */}
                    <RxCross2 className="cursor-pointer" fontSize={22} onClick={handleCloseModal} />
                </div>
                {selectedTeamMember && (
                    <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-16">
                        {/* Image Section */}
                        <div className="p-4 rounded-2xl bg-[#201b34] self-start">
                            <div className="bg-gradient-to-tl from-[#d8cdf31a] to-[#6e44d95a] rounded-2xl p-2">
                                <Image
                                    src={selectedTeamMember.image}
                                    width={600}
                                    height={700}
                                    alt={selectedTeamMember.name}
                                    className="min-w-[180px] md:max-w-[300px] md:min-w-[280px]  rounded-2xl"
                                />
                            </div>
                            <div className="text-center mt-5 pb-2 space-y-1">
                                <p className="text-white font-bold text-[18px]">{selectedTeamMember.name}</p>
                                <p className="text-[#6a6778] text-[16px]">{selectedTeamMember.position}</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-[16px] font-semibold space-x-10 text-[#a7a3ad] mb-6">
                                {selectedTeamMember.telegram && (
                                    <Link href={selectedTeamMember.telegram} target="_blank">
                                        Telegram
                                    </Link>
                                )}
                                {selectedTeamMember.linkedIn && (
                                    <Link href={selectedTeamMember.linkedIn} target="_blank">
                                        LinkedIn
                                    </Link>
                                )}
                            </div>
                            <div className="space-y-2 lg:space-y-3">
                                {selectedTeamMember.bio.map((bio, index) => (
                                    <p key={index} className="text-[16px] font-normal text-[#888490]">
                                        {bio}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Texts Section */}
            </div>
        </Rodal>
    );
};

export default TeamModal;
