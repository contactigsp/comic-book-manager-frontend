import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { MyCollectionContextProvider } from "./context/myCollectionContext";
import { WishlistContextProvider } from "./context/wishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <WishlistContextProvider>
      <MyCollectionContextProvider>
        <App />
      </MyCollectionContextProvider>
    </WishlistContextProvider>
  </div>
);
