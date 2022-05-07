import React, { useState } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const [sl, setSL] = useState(1);
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
    <>
      <div className="header-cart mt-10  px-20 w-full bg-white p-2">
        <span className="text-3xl font-light">Giỏ hàng </span>
      </div>
      <div className="cart mt-4 px-20 grid grid-cols-10 gap-4">
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
                Tất cả (số lượng)
              </label>
            </div>
            <div className="col-span-2">Đơn giá</div>
            <div className="col-span-2">Số lượng</div>
            <div className="col-span-2">Thành tiền</div>
            <div>
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
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
                    product 1 product 1 product 1 product 1 product 1 product 1
                    product 1 product 1 product 1 product 1
                  </Link>
                  <span className="text-xs text-[#777] ">
                    cấu hình Cấu hình Cấu hình Cấu hình
                  </span>
                </p>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                2000000
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
                2000000
              </div>
              <div className="flex items-center justify-center text-sm ">
                <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
