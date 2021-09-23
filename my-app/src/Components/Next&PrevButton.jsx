import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NextAndPrevPages from "../Pages/NextAndPrevPages";
import { useAppContext } from "../utils/context";
import { reducer } from "../utils/reducer";
const NextPrevButton = () => {
  const { previous, next, fetchPokemon, dispatch, changePageNext, changePagePrev } = useAppContext();
  return (
    <div className="button-wrapper">
      <a
        className="button"
        onClick={changePagePrev(previous)}
        href=""
      >
        Prev
      </a>
      <a
        className="button"
        onClick={changePageNext(next)}
        href=""
      >
        Next
      </a>
    </div>
  );
};

export default NextPrevButton;
