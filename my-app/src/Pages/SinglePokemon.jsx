import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";
import { useAppContext } from '../utils/context';

const SinglePokemon = () => {
  const {fetchPokemon} = useAppContext()
  const { name } = useParams();
  const { name: pokemonName, types } = fetchPokemon(`${name}`);
  console.log(fetchPokemon(`${name}`));
  return (
    <div className="pokemon-container">
      <div className="pokemon-info-wrapper">
      <h2>{pokemonName}</h2>
      <div className="type-wrapper">
        {/* {types.map((type) => {
          console.log(type);
          <div className="type">{type.type.name}</div>
        })} */}
      </div>
      </div>
    </div>
  )
  
}

export default SinglePokemon
