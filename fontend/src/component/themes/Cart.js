import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartApi from "../api/CartAPI";
import CartItem from "../component/cart/CartItem";
import useGetLocalSec from "../hook/useGetLocalSec";
const Cart = () => {
  document.title = "Giỏ Hàng";

  const [cart, setCart] = useState();
  console.log("🚀 ~ file: Cart.js ~ line 10 ~ Cart ~ cart", cart);
  const userID = useGetLocalSec("user");

  useEffect(() => {
    async function fechData() {
      (async () => {
        const respon = await CartApi.getItemCardByUserID(userID);
        if (respon.data) {
          setCart(respon.data);
        }
      })();
    }
    fechData();
  }, [userID]);

  return (
    <div className="min-h-full">
      <div className="header-cart mt-11  px-20 w-full bg-white p-2">
        <span className="text-3xl font-light">Giỏ hàng </span>
      </div>
      {userID === undefined || cart === undefined || cart.length === 0 ? (
        <div className="w-full text-center font-light">
          <h1 className=" mt-6 text-2xl ">Giỏ hàng của bạn đang trống! </h1>
          <Link to="/" className="text-blue-400">
            Quay lại trang chủ thêm sản phẩm
          </Link>
        </div>
      ) : (
        <div className="cart mt-4 px-20 grid grid-cols-10 gap-4 h-auto">
          <div className="col-span-7  ">
            {/* header cart control */}
            <div className="cart-control grid grid-cols-12 text-center text-sm bg-white p-2">
              <div className="col-span-5">
                <input
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  className="  form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />
                <label
                  htmlFor="selectAll"
                  className="block cursor-pointer text-left "
                >
                  Tất cả
                </label>
              </div>
              <div className="col-span-2">Đơn giá</div>
              <div className="col-span-2">Số lượng</div>
              <div className="col-span-2">Thành tiền</div>
              <div>
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
            {/* cart item */}
            {/* {cartcount?.cart?.map((item, index) =>
              item.id === "" ? (
                ""
              ) : (
                <CartItem
                  key={item.id}
                  id={item.id}
                  sl={item.amount}
                  user={userID}
                  cartCount={cartcount}
                />
              )
            )} */}
            {cart.map((item, index) => (
              <CartItem
                key={item.cartID}
                cartId={item.cartID}
                productID={item.productID}
                sl={item.quantity}
                user={userID}
              />
            ))}
          </div>
          <div className="col-span-3 ">
            <div className=" bg-white p-2">
              <div className="grid grid-cols-2">
                <span>Giao tới</span>
                <span className="text-right text-blue-400 text-base cursor-pointer">
                  Thay đổi
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
