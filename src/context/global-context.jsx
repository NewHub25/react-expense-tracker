import { createContext, useReducer } from "react";
import appReducer from "../logic/app-reducer";
import { initialState } from "../logic/constants";

export const Context = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{ transactions: state.transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </Context.Provider>
  );
};
