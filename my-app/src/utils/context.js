import React, { useState, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon`;

const initialState = {
  count: 0,
  // next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  // previous: "",
  results: [],
  page: 1,
  isSingle: false,
  query: "",
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
    dispatch({ type: "CHANGE_NEXT_BUTTON", payload: { page: page } });
  };
  const changePagePrev = () => {
    const page = state.page - 1;
    // console.log(`prev - current page: ${page}`);
    dispatch({ type: "CHANGE_PREV_BUTTON", payload: page });
  };

  const changePageSingle = (pokemonName) => {
    const newStatus = true;
    // console.log(state.query);
    // console.log(pokemonName);
    dispatch({
      type: "CHANGE_QUERY",
      payload: pokemonName,
    });

    dispatch({
      type: "CHANGE_SINGLE_PAGE_STATUS",
      payload: newStatus,
    });

    dispatch({
      type: "SET_SINGLE_RESULTS",
      payload: { results: fetchPokemon(`${API_ENDPOINT}/${pokemonName}`) },
    });
  };

  useEffect(() => {
    fetchPokemon(
      `${API_ENDPOINT}${
        state.isSingle
          ? `/${state.query}`
          : `?limit=30&offset=${state.page * 30}`
      }`
    );

    console.log(state.isSingle);
    console.log(state.query);
    // console.log(fetchPokemon(`${API_ENDPOINT}offset=${state.page*30}`));
  }, [state.page, state.query]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        // fetchPokemon,
        dispatch,
        changePageNext,
        changePagePrev,
        changePageSingle,
        fetchPokemon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
