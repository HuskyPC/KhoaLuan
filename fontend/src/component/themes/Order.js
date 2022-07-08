import React from "react";
import { Link } from "react-router-dom";
import imgAccDefault from "../account/defaultProduct.jpg";

const Order = () => {
  const numberFormat = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <h5>Địa chỉ người nhận</h5>
          <div className="bg-white rounded p-2 text-sm">
            <strong>Nguyễn Thanh Bình</strong>
            <br />
            <span>Địa chỉ </span>
            <br />
            <span>SDT</span>
          </div>
        </div>
        <div>
          <h5>Hình thức thanh toán</h5>
          <div className="bg-white rounded p-2 text-sm">
            <strong>Nguyễn Thanh Bình</strong>
            <br />
            <span>Địa chỉ </span>
            <br />
            <span>SDT</span>
          </div>
        </div>
      </div>
      <div className="mt-3 bg-white">
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
                Tạm tính: <strong>{numberFormat(1000000)}</strong>
              </span>
              <span className=" block">
                Phí vận chuyển: <strong>{numberFormat(1000000)}</strong>
              </span>
              <span className=" block">
                Tổng tiền: <strong>{numberFormat(1000000)}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
