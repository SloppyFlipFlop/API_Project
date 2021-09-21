import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../utils/context";

const Home = () => {
  const { results } = useAppContext();
  return (
    <div className="container">
      <div className="header-wrapper">
        <h4 className="title">Pokedex</h4>
      </div>
      <div className="body-wrapper">
        {results.map((pokemon, id) => {
          const { name, url } = pokemon;
          console.log(name, url);
          return (
            <a href={url} className="pokemon-wrapper" key={id}>
              <h1 className="name">{name}</h1>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
