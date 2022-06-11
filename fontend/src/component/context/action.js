import { ADD_TO_CART, INCREASE_TO_CARTITEM } from "./constant";

export const addToCart = (payload, price, userID) => ({
  type: ADD_TO_CART,
  payload,
  price,
  userID,
});
export const increaseItem = (payload, cart, productID, userID) => ({
  type: INCREASE_TO_CARTITEM,
  payload,
  cart,
  productID,
  userID,
});
