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

    // case "HANDLE_SEARCH":
    //   return {
    //     ...state,
    //     page: 0,
    //     query: action.payload,
    //   };

    

    default:
      throw new Error(`No Matching Pokemon`);
  }
};
