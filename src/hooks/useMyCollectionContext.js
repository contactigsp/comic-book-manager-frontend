import { MyCollectionContext } from "../context/myCollectionContext";
import { useContext } from "react";

export const useMyCollectionContext = () => {
  const context = useContext(MyCollectionContext);

  if (!context) {
    throw Error(
      "useMyCollectionContext must be used inside an MyCollectionContextProvider"
    );
  }

  return context;
};
