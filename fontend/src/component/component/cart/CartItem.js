import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartApi from "../../api/CartAPI";

const CartItem = (props) => {
  const [product, setProduct] = useState("");
  console.log("🚀 ~ file: CartItem.js ~ line 7 ~ CartItem ~ product", product);
  useEffect(() => {
    (async () => {
      if (props.id !== undefined) {
        const resopne = await CartApi.getProductbyID(props.id);
        console.log("🚀 ~ file: CartItem.js ~ line 12 ~ resopne", resopne.data);
        setProduct(resopne.data);
      }
    })();
  }, [props.id]);
  const [sl, setSL] = useState(props.sl);
  const tangSL = () => {
    if (sl >= 1 && sl < 10) {
      setSL(sl + 1);
    }
  };
  const giamSL = () => {
    if (sl > 1 && sl <= 10) {
      setSL(sl - 1);
    }
  };
  return (
    <div className="cart-item-content mt-2 bg-white p-2 text-center">
      <div className="card-item grid grid-cols-12">
        <div className="col-span-5 grid grid-cols-10 gap-2 text-left">
          <input
            className="col-span-1 mt-5  form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <img
            src="asset/img/error/img/placeholder.png"
            alt="hinh anh"
            className="col-span-3 "
          />
          <p className="col-span-6 ">
            <Link
              to=""
              className=" nameProductNoBreak"
              title="product 1 product 1 product 1 product 1 product 1 product 1
                    product 1 product 1 product 1 product 1"
            >
              {product[0]?.name === undefined
                ? "sản phẩm thử nghiệm"
                : product[0]?.name}
            </Link>
            <span className="text-xs text-[#777] ">
              cấu hình Cấu hình Cấu hình Cấu hình
            </span>
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          {product[0]?.price === undefined ? 0 : product[0]?.price}
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <div className="buttons_added">
            <input
              className="minus is-form"
              type="button"
              defaultValue="-"
              onClick={giamSL}
            />
            <input
              aria-label="quantity"
              className="input-qty"
              max="10"
              min="1"
              name="soLuong"
              type="number"
              readOnly
              value={sl}
            />
            <input
              className="plus is-form"
              type="button"
              defaultValue="+"
              onClick={tangSL}
            />
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          {product[0]?.price === undefined ? 0 : product[0]?.price * sl}
        </div>
        <div className="flex items-center justify-center text-sm ">
          <i className="fa-solid fa-trash-can"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;