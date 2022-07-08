import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import { number } from "yup";
import imgAccDefault from "../account/defaultAccountImg.png";
import Edit from "../component/user/Edit";
import History from "../component/user/History";
import Notification from "../component/user/Notification";
import useGetLocalSec from "../hook/useGetLocalSec";
import Order from "./Order";

const User = ({ tab = 0 }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(tab);
  const userId = useGetLocalSec("user");

  function setUserState(number, keysParams) {
    setState(number);
    // navigate(keysParams, true);
  }

  return (
    <div className=" col-span-3 ">
      <div className="grid grid-cols-12 gap-3">
        <img
          src={imgAccDefault}
          alt="hinh anh"
          className=" rounded-full col-span-2 "
        />

        <h1 className="text-sm col-span-10">
          <span className="text-xs font-light">Tài khoảng của</span>
          <br />
          <strong>Nguyễn Thanh Bình</strong>
        </h1>
      </div>
      <Link
        to="/user/Thong-tin-tai-khoang"
        className="mt-1 grid grid-cols-12 gap-1 p-2 hover:bg-white rounded cursor-pointer"
        onClick={() => setUserState(1, "/Thong-tin-tai-khoang")}
      >
        <i className="fa-solid fa-user col-span-2 m-auto"></i>
        <span className="text-xs font-light col-span-10">
          Thông tin tài khoảng
        </span>
      </Link>
      {/* <span
              className="mt-1 grid grid-cols-12 gap-1 p-2 hover:bg-white rounded cursor-pointer"
              onClick={() => setState(2)}
            >
              <i className="fa-solid fa-bell col-span-2 m-auto"></i>
              <span className="text-xs font-light col-span-10">
                Thông báo của tôi
              </span>
            </span> */}
      <Link
        to="/user/Quan-li-don-hang"
        className="mt-1 grid grid-cols-12 gap-1 p-2 hover:bg-white rounded cursor-pointer"
      >
        <i className="fas fa-list col-span-2 m-auto"></i>
        <span className="text-xs font-light col-span-10">Quản lí đơn hàng</span>
      </Link>
    </div>
  );
};

export default User;
