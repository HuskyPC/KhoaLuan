import React from "react";
import { Link } from "react-router-dom";
const NewProduct = () => {
  const numberFormat = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  return (
    <div className="new-product pt-8 ">
      <span className="uppercase block p-4 text-xl tracking-widest text-center">
        Sản phẩm mới
      </span>
      <div className=" product-item grid grid-cols-4 gap-3 px-[80px] h-[285px]  ">
        <div className="product-body h-[300px] bg-white mt-3 p-3 relative text-center">
          <img
            className="w-full h-[130px] "
            src="asset/img/product/product1.jpg"
            alt="hinh anh"
          />
          <Link
            to="/"
            className="heart text-center hidden top-[60px] left-0 right-0 absolute"
          >
            <i className="far fa-heart text-blue-500 text-3xl"></i>
          </Link>
          {/* <i className="fas fa-heart text-blue-700"></i> */}
          <div className="mt-8"></div>
          <span className="price text-blue-500">{numberFormat(20000000)} </span>
          <span className="priceSale text-xs line-through text-red-500">
            {numberFormat(20000000)}{" "}
          </span>
          <Link to="/" className="">
            <p className="first-letter:uppercase  name-product-body mt-4  font-light ">
              product1 binh binh binh binh binh binh binh binh binh
            </p>
          </Link>
        </div>
        <div className=" h-[270px] bg-white mt-3 "></div>
        <div className=" h-[270px] bg-white mt-3 "></div>
        <div className=" h-[270px] bg-white mt-3 "></div>
      </div>
    </div>
  );
};

export default NewProduct;
