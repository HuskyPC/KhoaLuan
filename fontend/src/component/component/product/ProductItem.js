import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreContext, action } from "../../context";
import { toast } from "react-toastify";

const ProductItem = (props) => {
  const [state, dispatchCartContext] = useStoreContext();
  const [isExitCart, setIsExitCart] = useState(false);
  let isUserLocal = JSON.parse(localStorage.getItem("user"));
  let isUserSEC = JSON.parse(sessionStorage.getItem("user"));
  const [UserID, setUser] = useState();
  if (UserID === undefined) {
    if (isUserLocal !== null) setUser(isUserLocal);
    else if (isUserSEC !== null) setUser(isUserSEC);
  }
  const numberFormat = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  const hadleAddToCart = () => {
    dispatchCartContext(action.addToCart(props.id));
  };
  return (
    <div className="product-body h-[350px] bg-white  p-3 relative text-center ">
      <img
        className="w-full h-1/2 "
        src={`${
          props.img === null || props.urlImg === null
            ? "asset/img/error/img/placeholder.png"
            : props.urlImg + props.img
        }`}
        alt="hinh anh"
      />
      <span className="heart text-center hidden top-[60px] left-0 right-0 absolute">
        {props.favo === 1 ? (
          <i className="fas fa-heart text-blue-700 text-3xl"></i>
        ) : (
          <i className="far fa-heart text-blue-500 text-3xl"></i>
        )}
      </span>
      <div className="mt-8"></div>
      <span className="price text-blue-500">
        {numberFormat(
          props.priceSale === 0 || props.priceSale === null
            ? props.price
            : props.priceSale
        )}
      </span>
      <span
        className={`${
          props.priceSale === 0 || props.priceSale === null ? "hidden" : ""
        } priceSale text-xs line-through text-red-500`}
      >
        {numberFormat(props.price)}
      </span>
      <Link to={`/detail/${props.id} `} className="hover:text-blue-500">
        <p className="capitalize  name-product-body mt-3 font-light ">
          {props.name}
        </p>
      </Link>
      <div className="grid grid-cols-5 gap-2 mt-5  font-light">
        <Link
          to={`/detail/${props.id} `}
          className="col-span-2 text-xs mt-1 hover:text-blue-500"
        >
          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          &nbsp;Chi tiết
        </Link>
        <button
          className="col-span-3 text-[10px] text-white bg-black rounded-full hover:bg-blue-500"
          onClick={hadleAddToCart}
        >
          <i className="fa-solid fa-cart-shopping text-xs"></i>&nbsp;Thêm vào
          giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
