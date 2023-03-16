import { WishlistContext } from "../context/wishlistContext";
import { useContext } from "react";

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw Error(
      "useWishlistContext must be used inside an WishlistContextProvider"
    );
  }

  return context;
};
