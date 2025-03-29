import { createContext, useContext, useState,useRef } from "react";

const AppContext = createContext();

export const GlobalProvider = ({ children }) => {
  const searchRef = useRef("all")
  return (
    <AppContext.Provider value={{searchRef}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
