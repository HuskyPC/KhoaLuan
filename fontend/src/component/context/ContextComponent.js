import React, { createContext, useContext, useEffect, useState } from "react";
import FavoriteFakeData from "../data/FavoriteFakeData";
import ProductFakeData from "../data/ProductFakeData";
import { toast } from "react-toastify";
const ContextWEB = createContext();

function ContextProvider(props) {
  const [...favoriteFake] = FavoriteFakeData;
  const [cartContext, setCartContext] = useState("");
  const [...product] = ProductFakeData;
  const [favoriteContext, setFavoriteContext] = useState(favoriteFake);
  let isUserLocal = JSON.parse(localStorage.getItem("user"));

  let isUserSEC = JSON.parse(sessionStorage.getItem("user"));

  const [UserID, setUser] = useState();
  if (UserID === undefined) {
    if (isUserLocal !== null) setUser(isUserLocal);
    else if (isUserSEC !== null) setUser(isUserSEC);
  }

  function ToggleFavorite(productID) {
    const updateFavorite = product.map((item) => {
      if (item.id === productID) {
        return [...favoriteContext, favoriteContext.push(`id`, productID)];
      }
      return favoriteContext;
    });
    setFavoriteContext(updateFavorite);
  }
  function addtoCart(newItem) {
    if (UserID) {
      setCartContext((prevItems) => [...prevItems, newItem.id]);
      toast.success("Thâm vào giỏ hàng thành công", {
        className: "top-10",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else
      toast.warning("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng", {
        className: "top-10",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
  }
  const values = {
    cartContext,
    setCartContext,
    favoriteContext,
    setFavoriteContext,
    ToggleFavorite,
    addtoCart,
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
