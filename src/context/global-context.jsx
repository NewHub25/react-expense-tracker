import { createContext } from "react";

const Context = createContext(null);

export const GlobalProvider = ({ children }) => {
  return <Context.Provider value={{ total: 100 }}>{children}</Context.Provider>;
};
