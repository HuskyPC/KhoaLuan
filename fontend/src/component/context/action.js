import { ADD_TO_CART } from "./constant";
export const addToCart = (payload, price, userID) => ({
  type: ADD_TO_CART,
  payload,
  price,
  userID,
});
