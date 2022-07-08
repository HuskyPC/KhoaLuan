import React from "react";
import { Link } from "react-router-dom";
import imgAccDefault from "../../account/defaultProduct.jpg";

const Notification = (props) => {
  const numberFormat = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  return (
    <div className="w-full">
      <div className="w-full bg-white p-3 rounded">
        <h1 className="font-medium text-sm">
          <i className="fa-solid fa-car"></i> Giao hàng thành công
        </h1>
        <hr className="p-2 mt-2" />

        <Link to="/detail/SP12" className="grid grid-cols-12">
          <img
            src={imgAccDefault}
            alt="hình ảnh"
            className="w-20 h-20 col-span-2 "
          />
          <span className="col-span-8 text-gray-500 text-sm">
            tên sản phẩm
            <br />
            Số lượng:<strong> 2</strong>
          </span>
          <strong>{numberFormat(1000000000000)}</strong>
        </Link>
        <hr className="p-2 mt-2" />
        <div className="w-full text-right">
          <span className=" block">
            Tổng tiền: <strong>{numberFormat(1000000)}</strong>
          </span>
          <Link
            to="/user/Quan-li-don-hang/1"
            className="inline-block mt-3 col-span-2    px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
                shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
                transition  duration-150  ease-in-out"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;
