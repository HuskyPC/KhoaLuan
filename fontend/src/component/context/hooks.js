import { useContext } from "react";
import Context from "./Context";
export const useStoreContext = () => {
  const [state, dispatchCartContext] = useContext(Context);
  return [state, dispatchCartContext];
};
