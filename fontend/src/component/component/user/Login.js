import React, { useState } from "react";
import { Link } from "react-router-dom";
import UseHookForm from "../../hook/UseHookForm";
import Header from "../../themes/Header";
const Login = (props) => {
  const [dropdownUser, setDropDownUser] = useState(true);
  const handle = () => {
    setDropDownUser(!dropdownUser);
  };
  const { valuesFromLogin, handleValuesFromLogin } = UseHookForm({
    email: "",
    password: "",
    rememberMe: false,
  });
  return (
    <>
      <div
        className={`${
          dropdownUser && props.abc ? "" : "hidden"
        } h-screen bg-black-rgba-03 top-10 left-0 right-0  cursor-pointer z-0 absolute`}
      >
        <div
          className={`block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto mt-20   z-20`}
        >
          <form method="post" action="" onChange={handleValuesFromLogin}>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  name="rememberMe"
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  htmlFor="exampleCheck2"
                >
                  Nhớ tôi
                </label>
              </div>
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Quên mật khẩu
              </Link>
            </div>
            <button
              type="submit"
              className="   w-full  px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
                shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
                transition  duration-150  ease-in-out"
            >
              Đăng nhập
            </button>
            <p className="text-gray-800 mt-6 text-center">
              Not a member?{" "}
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
