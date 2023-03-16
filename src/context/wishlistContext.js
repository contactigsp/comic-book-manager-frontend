import { createContext, useReducer } from "react";

export const WishlistContext = createContext();

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "SET_WISHLIST":
      return {
        comicBooks: action.payload,
      };
    case "CREATE_WISHLIST":
      return {
        comicBooks: [action.payload, ...state.comicBooks],
      };

    case "DELETE_WISHLIST":
      return {
        comicBooks: state.comicBooks.filter(
          (w) => w._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, {
    comicBooks: [{ _id: 1 }],
  });
  return (
    <WishlistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
