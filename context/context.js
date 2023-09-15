"use client";
const { createContext, useState, useContext } = require("react");
export const ArtContext = createContext();
export const ArtProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ArtContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ArtContext.Provider>
  );
};

export const useArtContext = () => useContext(ArtContext);
