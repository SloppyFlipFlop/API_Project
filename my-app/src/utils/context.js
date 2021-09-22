import React, { useState, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";



const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/`
const PAGE_LIMIT = `?limit=30&offset=`

const initialState = {
  count: 0,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: null,
  results: [],
  // query: "ditto"
}
const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  // hooks
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [query, setQuery] = useState("ditto")

  

  const fetchPokemon = async(url) => {
    try {
      const response = await fetch(url)
      const data  = await response.json()
      dispatch({ type: "SET_RESULTS", payload: data });
      // console.log(data);
    } catch(error) {
      console.error(error);
    }
  }

  const changePage = (dir) => {
    dispatch({ type: "CHANGE_PAGE", payload: state.next });
    // console.log(dispatch({ type: "HANDLE_SEARCH", payload: query }));
    // return query
  };

  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}`)
    // fetchPokemon(`${API_ENDPOINT}${query}`)
    console.log(fetchPokemon(`${API_ENDPOINT}`));
  }, [])

  return <AppContext.Provider value={{...state, fetchPokemon}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
