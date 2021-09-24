import React, { useState, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=30&`;

const initialState = {
  count: 0,
  // next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  // previous: "",
  results: [],
  page: 1,
  
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
      
      // console.log(`data: ${data}`);
    } catch (error) {
      console.error(error);
    }
  };



  

  const changePageNext = () => {
    const page = state.page + 1;
    // console.log(`next - current page: ${page}`);
    dispatch({ type: "CHANGE_NEXT_BUTTON", payload: page });
  }
  const changePagePrev = () => {
    const page = state.page - 1;
    // console.log(`prev - current page: ${page}`);
    dispatch({ type: "CHANGE_PREV_BUTTON", payload: page });
  }





  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}offset=${state.page*30}`);
    // console.log(fetchPokemon(`${API_ENDPOINT}offset=${state.page*30}`));
  }, [state.page]);

  return (
    <AppContext.Provider value={{...state, fetchPokemon, dispatch, changePageNext, changePagePrev }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
