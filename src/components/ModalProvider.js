import React, { useState } from "react";

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [openProjects, setProjectsOpen] = useState(false);
  const [openAbout, setAboutOpen] = useState(false);
  const [openResume, setResumeOpen] = useState(false);
  const [openContact, setContactOpen] = useState(false);

  const openModalProjects = () => {
    setProjectsOpen(true);
  };
  const closeModalProjects = () => {
    setProjectsOpen(false);
  };
  const openModalAbout = () => {
    setAboutOpen(true);
  };
  const closeModalAbout = () => {
    setAboutOpen(false);
  };
  const openModalResume = () => {
    setResumeOpen(true);
  };
  const closeModalResume = () => {
    setResumeOpen(false);
  };
  const openModalContact = () => {
    setContactOpen(true);
  };
  const closeModalContact = () => {
    setContactOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openProjects,
        openAbout,
        openResume,
        openContact,
        openModalProjects,
        closeModalProjects,
        openModalAbout,
        closeModalAbout,
        openModalResume,
        closeModalResume,
        openModalContact,
        closeModalContact,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
