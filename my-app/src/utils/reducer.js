import { act } from "react-dom/test-utils";

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: true };

    case "SET_RESULTS":
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
      };

    case "CHANGE_NEXT_BUTTON":
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous
      };

    case "CHANGE_PREV_BUTTON":
      return {
        ...state,
        loading: false,
        results: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
      };

    default:
      throw new Error(`No Matching Pokemon`);
  }
};
