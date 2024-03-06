import { createContext, useReducer } from "react";
import appReducer from "../logic/app-reducer";
import { initialState } from "../logic/constants";

export const Context = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <Context.Provider value={{ transactions: state.transactions }}>
      {children}
    </Context.Provider>
  );
};
