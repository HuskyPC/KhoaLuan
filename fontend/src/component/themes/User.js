import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import imgAccDefault from "../account/defaultAccountImg.png";
import Edit from "../component/user/Edit";
import History from "../component/user/History";
import Notification from "../component/user/Notification";
import useGetLocalSec from "../hook/useGetLocalSec";

const User = ({ tab = 0 }) => {
  const [state, setState] = useState(tab);
  const userId = useGetLocalSec("user");
  return (
    <>
      {userId === undefined ? (
        <div className=" w-full mt-20 h-56 text-center">
          <span className="text-2xl  mt-5">
            Bạn cần đăng nhập để xem thông tin của mình
          </span>
        </div>
      ) : (
        <div className=" w-full px-20 grid grid-cols-12 gap-3 mt-20">
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
            <span
              className="mt-1 grid grid-cols-12 gap-1 p-2 hover:bg-white rounded cursor-pointer"
              onClick={() => setState(1)}
            >
              <i className="fa-solid fa-user col-span-2 m-auto"></i>
              <span className="text-xs font-light col-span-10">
                Thông tin tài khoảng
              </span>
            </span>
            {/* <span
              className="mt-1 grid grid-cols-12 gap-1 p-2 hover:bg-white rounded cursor-pointer"
              onClick={() => setState(2)}
            >
              <i className="fa-solid fa-bell col-span-2 m-auto"></i>
              <span className="text-xs font-light col-span-10">
                Thông báo của tôi
              </span>
            </span> */}
            <span
              className="mt-1 grid grid-cols-12 gap-1 p-2 hover:bg-white rounded cursor-pointer"
              onClick={() => setState(3)}
            >
              <i className="fas fa-list col-span-2 m-auto"></i>
              <span className="text-xs font-light col-span-10">
                Quản lí đơn hàng
              </span>
            </span>
          </div>
          <div className="col-span-9">
            {state === 1 && <Edit />}
            {state === 2 && <History />}
            {state === 3 && <Notification />}
          </div>
        </div>
      )}
    </>
  );
};

export default User;
