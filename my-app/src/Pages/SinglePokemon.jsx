import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../utils/context";

const SinglePokemon = () => {
  const { query, isSingle, dispatch, changePageSingle, fetchPokemon } = useAppContext();
  const { name } = useParams();

  useEffect(() => {
    changePageSingle(`${name}`)
    // dispatch({
    //   type: "CHANGE_QUERY",
    //   payload: name,
    // });
  }, [])

  console.log(`name is ${name} : query is ${query} : single page status is ${isSingle}`);
  console.log(`query is: ${query}`);
  // const { name : pokemonName, types } = fetchPokemon(`https://pokeapi.co/api/v2/pokem${query}`);
  // console.log(`array: ${fetchPokemon(`https://pokeapi.co/api/v2/pokemon/ditto`)}`);
  // console.log(fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`));
  // console.log(types);
  return (
    <div className="pokemon-container">
      <Link to="/" class="homeButton">Back to Home</Link>
      <div className="pokemon-info-wrapper">
        <h2>{name}</h2>
        <div className="type-wrapper">
          
          {/* {types.map((type) => {
          console.log(type);
          <div className="type">{type.type.name}</div>
        })} */}
        </div>
      </div>
    </div>
  );
};

export default SinglePokemon;
