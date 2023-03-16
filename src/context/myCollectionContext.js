import { createContext, useReducer } from "react";

export const MyCollectionContext = createContext();

export const myCollectionReducer = (state, action) => {
  switch (action.type) {
    case "SET_MYCOLLECTION":
      return {
        comicBooks: action.payload,
      };
    case "CREATE_MYCOLLECTION":
      return {
        comicBooks: [action.payload, ...state.comicBooks],
      };

    case "DELETE_MYCOLLECTION":
      return {
        comicBooks: state.comicBooks.filter(
          (w) => w._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const MyCollectionContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myCollectionReducer, {
    comicBooks: [{ _id: 1 }],
  });
  return (
    <MyCollectionContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MyCollectionContext.Provider>
  );
};
