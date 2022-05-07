import { Children, useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";

function Provider({ children }) {
  const [cartItem, dispathCartItem] = useReducer(reducer, initState);
  const values = [cartItem, dispathCartItem];
  return <Context.Provider value={values}>{children}</Context.Provider>;
}
export default Provider;
