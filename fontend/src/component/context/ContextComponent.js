import React, { createContext, useContext, useState } from "react";
import FavoriteFakeData from "../data/FavoriteFakeData";
import ProductFakeData from "../data/ProductFakeData";
const ContextWEB = createContext();
function ContextProvider(props) {
  function ToggleFavorite(productID) {
    const updateFavorite = product.map((item) => {
      if (item.id === productID) {
        return [...favoriteContext, favoriteContext.push(`id`, productID)];
      }
      return favoriteContext;
    });
    setFavoriteContext(updateFavorite);
  }
  const [users, setusers] = useState({
    user: "abc",
    name: "abc",
    avatar: "",
  });
  const [...favoriteFake] = FavoriteFakeData;
  const [cartContext, setCartContext] = useState();
  const [...product] = ProductFakeData;
  const [favoriteContext, setFavoriteContext] = useState(favoriteFake);

  const values = {
    users,
    setusers,
    cartContext,
    setCartContext,
    favoriteContext,
    setFavoriteContext,
    ToggleFavorite,
  };

  return <ContextWEB.Provider value={values} {...props}></ContextWEB.Provider>;
}
function useContextWEB() {
  const context1 = useContext(ContextWEB);
  if (typeof context1 === undefined)
    throw new Error("Sử dụng ContextProvider sai");
  return context1;
}
export { useContextWEB, ContextProvider };
