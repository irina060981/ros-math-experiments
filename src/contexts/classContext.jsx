import React, { createContext, useContext } from 'react';

import ClassController from "@/controllers/classController";

const ClassCContext = createContext();

export const ClassCProvider = ({ children }) => {
  const classC = new ClassController();
  classC.uploadClassList();

  return (
    <ClassCContext.Provider value={{ classC }}>
      {children}
    </ClassCContext.Provider>
  );
};

export const useClassC = () => {
  return useContext(ClassCContext)
}
