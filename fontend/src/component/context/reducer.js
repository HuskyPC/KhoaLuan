import { ADD_TO_CART } from "./constant";
import { toast } from "react-toastify";
import useGetLocalSec from "../hook/useGetLocalSec";
const initState = {
  cart: [
    {
      id: "",
      action: "",
      amount: 0,
      price: 0,
    },
  ],
};

function reducer(state, action) {
  let countCart = 0;

  //kiểm tra có trùng id ko
  function isExitIDCart(values) {
    if (values.length >= 2) {
      for (var i = 1; i < values.length; i++) {
        if (action.payload === values[i].id) {
          return true;
        }
      }
      return false;
    }
  }
  function countCartItem(values) {
    for (var j = 1; j < values.length; j++) {
      countCart = values[j].amount;
    }
    if (countCart > 10) {
      return true;
    }
    return false;
  }
  if (action.userID === undefined) {
    toast.error("Đăng nhập để thêm sản phẩm vào giỏ hàng ", {
      className: "top-10",
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  } else if (state.cart.length > 10 || countCartItem(state) === true) {
    toast.warning("Giỏ hàng có tối đa 10 sản phẩm ", {
      className: "top-10",
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return state;
  } else if (isExitIDCart(state.cart)) {
    toast.error("Sản phẩm đã có trong giỏ hàng", {
      className: "top-10",
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    return state;
  } else
    switch (action.type) {
      case ADD_TO_CART:
        const newList = {
          ...state,
          cart: [
            ...state.cart,
            {
              id: action.payload,
              action: action.type,
              amount: 1,
              price: action.price,
            },
          ],
        };
        let isUserLocal = JSON.parse(localStorage.getItem("user"));

        if (isUserLocal !== null) {
          localStorage.setItem("cart", JSON.stringify(newList));
        } else {
          sessionStorage.setItem("cart", JSON.stringify(newList));
        }
        toast.success("Thêm vào giỏ hàng thành công", {
          className: "top-10",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });

        return newList;

      default:
        throw new Error("Hành động không hợp lệ");
    }
}

export { initState };
export default reducer;
// toast.error("Sản phẩm đã có trong giỏ hàng", {
//     className: "top-10",
//     position: toast.POSITION.TOP_RIGHT,
//     autoClose: 3000,
//   });
