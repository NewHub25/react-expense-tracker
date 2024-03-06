import { createContext, useReducer } from "react";
import appReducer from "../logic/app-reducer";

export const Context = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useReducer(appReducer, []);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};
