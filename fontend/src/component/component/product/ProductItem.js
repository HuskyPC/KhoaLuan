import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContextWEB } from "../../context/ContextComponent";
const ProductItem = (props) => {
  const numberFormat = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  const { ToggleFavorite } = useContextWEB();
  const [favoritClick, setFavoritClick] = useState(true);
  const handleRemoveFavorite = () => {};
  return (
    <>
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
        <span
          className="heart text-center hidden top-[60px] left-0 right-0 absolute"
          onClick={handleRemoveFavorite}
        >
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
        <div className="grid grid-cols-2 gap-3 mt-5 px-2 font-light">
          <Link
            to={props.url + props.id}
            className="text-xs mt-1 hover:text-blue-500"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            Details
          </Link>
          <Link
            to="/"
            className="text-[10px] text-white bg-black rounded-full hover:bg-blue-500"
          >
            <i className="fa-solid fa-cart-shopping text-xs"></i> Add to cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
