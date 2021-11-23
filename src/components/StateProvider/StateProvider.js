import { createContext, useContext, useReducer } from 'react';

//Prepares the datalayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull information
export const useStateValue = () => useContext(StateContext);
