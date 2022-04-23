import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CartApi from "../../api/CartAPI";
import { useContextWEB } from "../../context/ContextComponent";
const ProductItem = (props) => {
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
  const { ToggleFavorite, addtoCart, cartContext } = useContextWEB();
  console.log(
    "🚀 ~ file: ProductItem.js ~ line 11 ~ ProductItem ~ cartContext",
    cartContext
  );
  const handleAddToCart = (props) => {
    addtoCart(props.id);
  };
  const [favoritClick, setFavoritClick] = useState(true);
  const handleRemoveFavorite = () => {};
  useEffect(() => {
    const addtoCart = (props) => {
      (async () => {
        if (UserID !== undefined) {
          try {
            const response = await CartApi.getCountCart(UserID);
            if (response.status === 201) {
              toast.success("Thêm giỏ hàng thành công", {
                className: "top-10",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
              });
            } else if (response.status >= 300 && response.status < 600) {
              toast.error("Thêm giỏ hàng không thành công", {
                className: "top-10",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
              });
            }
          } catch (error) {
            console.log(error.message);
          }
        } else {
          toast.warning("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      })();
    };
    addtoCart(props.id);
  }, [UserID, props.id]);
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
            to={`/detail/${props.id} `}
            className="text-xs mt-1 hover:text-blue-500"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            Details
          </Link>
          <button
            className="text-[10px] text-white bg-black rounded-full hover:bg-blue-500"
            onClick={handleAddToCart(props.id)}
          >
            <i className="fa-solid fa-cart-shopping text-xs"></i> Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
