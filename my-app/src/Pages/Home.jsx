import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NextPrevButton from "../Components/Next&PrevButton";

import { useAppContext } from "../utils/context";
import SinglePokemon from "./SinglePokemon";

const Home = () => {
  const { results } = useAppContext();

  return (
    <div id="Home" className="container">
      <div className="header-wrapper">
        <h4 className="title">Pokedex</h4>
      </div>
      <NextPrevButton />
      <div className="body-wrapper">
        {results.map((pokemon, id) => {
          
          const { name } = pokemon;
          console.log(`Name is : ${name}`);
          return <Link className="pokemon-wrapper" key={id} to={`/pokemon/${name}`}>
            {name}
          </Link>;
        })}
      </div>
    </div>
  );
};

export default Home;
