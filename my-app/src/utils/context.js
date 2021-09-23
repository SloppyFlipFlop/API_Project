import React, { useState, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=20`;

const initialState = {
  count: 0,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: "",
  results: [],
  // query: "ditto"
};
const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  // hooks
  const [isLoading, setIsLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [query, setQuery] = useState("ditto")

  const fetchPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_RESULTS", payload: data });
      console.log("data: ");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };





  const changePageNext = (next) => {
    
    dispatch({ type: "SET_RESULTS", payload: fetchPokemon(next) });
  }
  const changePagePrev = (prev) => {
    console.log(prev);
    dispatch({ type: "SET_RESULTS", payload: fetchPokemon(prev) });
  }





  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}`);
    // fetchPokemon(`${API_ENDPOINT}${query}`)
    console.log(fetchPokemon(`${API_ENDPOINT}`));
  }, [state.results]);

  return (
    <AppContext.Provider value={{...state, fetchPokemon, dispatch, changePageNext, changePagePrev }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
