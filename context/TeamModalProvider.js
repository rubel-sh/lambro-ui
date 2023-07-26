import React, { createContext, useContext, useState } from "react";

export const TeamModalContext = createContext();

const TeamModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState();

    return (
        <TeamModalContext.Provider value={{ isOpen, setIsOpen, selectedTeam, setSelectedTeam }}>
            {children}
        </TeamModalContext.Provider>
    );
};

export const useTeamModalContext = () => useContext(TeamModalContext);

export default TeamModalProvider;
