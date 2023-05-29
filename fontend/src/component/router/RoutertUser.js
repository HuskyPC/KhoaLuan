import React from "react";
import { Outlet } from "react-router-dom";
import useGetLocalSec from "../hook/useGetLocalSec";
import User from "../themes/User";

const RoutertUser = () => {
  const userId = useGetLocalSec("user");
  return (
    <div>
      <>
        {userId === undefined ? (
          <div className=" w-full mt-20 h-56 text-center">
            <span className="text-2xl  mt-5">
              Bạn cần đăng nhập để xem thông tin của mình
            </span>
          </div>
        ) : (
          <div className=" w-full px-20 grid grid-cols-12 gap-3 mt-20">
            <User />
            <div className="col-span-9">
              <Outlet />
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default RoutertUser;
