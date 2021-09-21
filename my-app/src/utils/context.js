import React, { useState, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";



const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/`

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: []
}
const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  // hooks
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchPokemon = async(url) => {
    try {
      const response = await fetch(url)
      const data  = await response.json()
      dispatch({ type: "SET_RESULTS", payload: data });
      console.log(data);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPokemon(API_ENDPOINT)
    
  }, [])

  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
