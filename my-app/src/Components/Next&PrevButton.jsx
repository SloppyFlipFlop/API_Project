import React from "react";
import { useAppContext } from "../utils/context";

const NextPrevButton = () => {
  const { page, changePageNext, changePagePrev } = useAppContext();
  
    return (
      <div className="button-wrapper">
        {page === 1 ? (
          <button className="button noshow">Prev</button>
        ) : (
          <button className="button" onClick={changePagePrev}>
            Prev
          </button>
        )}

        <div className="page">{page}</div>

        <button className="button" onClick={changePageNext}>
          Next
        </button>
      </div>
    );
};

export default NextPrevButton;
