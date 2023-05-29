import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartApi from "../../api/CartAPI";
// import { useStoreContext, action } from "../../context";
import useGetLocalSec from "../../hook/useGetLocalSec";
import { toast } from "react-toastify";

const ProductItem = (props) => {
  const UserID = useGetLocalSec("user");
  // const [state, dispatchCartContext] = useStoreContext();

  const numberFormat = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);

  const hadleAddToCart = () => {
    const formData = new FormData();
    formData.append("userID", UserID);
    formData.append("productID", props.id);
    formData.append("quantity", 1);
    (async () => {
      try {
        const response = await CartApi.postInsertCart(formData);
        console.log(
          "🚀 ~ file: ProductItem.js ~ line 26 ~ response",
          response.status
        );
        if (response.status === 201) {
          toast.success("Thêm vào giỏ hàng thành công", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        } else if (response.status === 202) {
          toast.warning("Sản phẩm đã có trong giỏ hàng", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        } else if (response.status === 203) {
          toast.warning("Giỏ hàng có số lượng tối đa 10 sản phẩm", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        } else if (response.status >= 400 || response.status <= 499) {
          toast.error("Thêm vào giỏ hàng không thành công", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
    // dispatchCartContext(
    //   action.addToCart(
    //     props.id,
    //     props.priceSale !== 0 ? props.priceSale : props.price,
    //     UserID
    //   )
    // );
  };

  return (
    <div className="product-body  bg-white  p-3 relative text-center pb-8 rounded">
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
      <span className="text-gray-400 font-light align-baseline">
        <span>
          <i class="fa-solid fa-microchip"></i> core i3 4300u
        </span>
        <br />
        <span>
          <i className="fa-solid fa-memory"></i> 8gb
        </span>
        &emsp;
        <span>
          <i className="fa-solid fa-hard-drive"></i> 240gb
        </span>
        &emsp;
        <span>
          <i className="fa-solid fa-display"></i> 1366x768
        </span>
        &emsp;
        <span>
          <i className="fa-solid fa-weight-hanging"></i> 2kg
        </span>
      </span>
      <div className="grid grid-cols-5 gap-2 mt-5  font-light">
        <Link
          to={`/detail/${props.id} `}
          className="col-span-2 text-xs mt-1 hover:text-blue-500"
        >
          <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          &emsp;Chi tiết
        </Link>
        <button
          className="col-span-3 text-[10px] text-white bg-black rounded-full hover:bg-blue-500"
          onClick={hadleAddToCart}
        >
          <i className="fa-solid fa-cart-shopping text-xs"></i>&emsp;Thêm vào
          giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
