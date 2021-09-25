// import { act } from "react-dom/test-utils";

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
        page: action.payload.page,
      };

    case "CHANGE_PREV_BUTTON":
      return {
        ...state,
        loading: false,
        page: action.payload,
      };

      case "CHANGE_QUERY":
        return {
          ...state,
          query: action.payload
        };

    case "CHANGE_SINGLE_PAGE_STATUS":
      return {
        ...state,
        isSingle: action.payload,
      };

      case "SET_SINGLE_RESULTS":
      return {
        ...state,
        results: action.payload.results,
      };

    default:
      throw new Error(`No Matching Pokemon`);
  }
};
