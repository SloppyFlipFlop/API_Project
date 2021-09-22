import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NextPrevButton from "../Components/Next&PrevButton";

import { useAppContext } from "../utils/context";

const Home = () => {
  const { results } = useAppContext();
  return (
    <div className="container">
      <div className="header-wrapper">
        <h4 className="title">Pokedex</h4>
      </div>
      <NextPrevButton />
      <div className="body-wrapper">
        {results.map((pokemon, id) => {
          const { name, url } = pokemon;
          // console.log(name, url);
          return (
            <a href={`${url}`} className="pokemon-wrapper" key={id}>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
