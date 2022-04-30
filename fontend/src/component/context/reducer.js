import { ADD_TO_CART } from "./constant";
import { toast } from "react-toastify";
const initState = {
  cart: [
    {
      id: "",
      action: "",
    },
  ],
};

function reducer(state, action) {
  console.log("🚀 ~ file: reducer.js ~ line 12 ~ reducer ~ state", state);
  //kiểm tra có trùng id ko
  const isExitIDCart = state.cart.map((item, index) => {
    if (item.id === action.payload) {
      return true;
    }
  });

  if (isExitIDCart.every((item) => item === undefined)) {
    switch (action.type) {
      case ADD_TO_CART:
        const newList = {
          ...state,
          cart: [
            ...state.cart,
            {
              id: action.payload,
              action: action.type,
            },
          ],
        };
        return newList;

      default:
        throw new Error("Hành động không hợp lệ");
    }
  } else
    toast.error("Sản phẩm đã có trong giỏ hàng", {
      className: "top-10",
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
}

export { initState };
export default reducer;
// toast.error("Sản phẩm đã có trong giỏ hàng", {
//     className: "top-10",
//     position: toast.POSITION.TOP_RIGHT,
//     autoClose: 3000,
//   });
