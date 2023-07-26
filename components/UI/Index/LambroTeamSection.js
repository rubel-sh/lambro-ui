import Container from "@/components/Layout/Container";
import { GradientTextSmallHeading } from "@/components/widgets/StyledComponents";
import React from "react";
import GenericCard from "./GenericCard";
import TeamCard from "@/components/widgets/TeamCard";
import { useTeamModalContext } from "@/context/TeamModalProvider";

const LambroTeamSection = () => {
    const { isOpen, setIsOpen, selectedTeam, setSelectedTeam } = useTeamModalContext();
    const handleOnClick = (index) => {
        setIsOpen(true);
        setSelectedTeam(index);
    };
    const members = [
        {
            image: "/assets/img/team_members/Víðir_Helgi_Helgason.png",
            name: "Víðir Helgi Helgason",
            designation: "Founder and CEO",
        },
        {
            image: "/assets/img/team_members/Svava_Heiðarsdóttir.png",
            name: "Svava Heiðarsdóttir",
            designation: "COO, Financial Manager & Project Manager",
        },
        {
            image: "/assets/img/team_members/Davíð_Dimitry.png",
            name: "Davíð Dimitry",
            designation: "Chief Strategy and Communications Officer",
        },
        {
            image: "/assets/img/team_members/grzagore.png",
            name: "Grzegorz Gierek",
            designation: "Advisor & Community Manager",
        },
    ];
    return (
        <Container className="text-center ">
            <GradientTextSmallHeading className="lg:!text-[44px] ">Team LAMBRO Crypto Ltd</GradientTextSmallHeading>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-16 ">
                {members.map((member, index) => (
                    <TeamCard
                        key={index}
                        onClick={() => handleOnClick(index)}
                        image={member.image}
                        name={member.name}
                        designation={member.designation}
                    />
                ))}
            </div>
        </Container>
    );
};

export default LambroTeamSection;
