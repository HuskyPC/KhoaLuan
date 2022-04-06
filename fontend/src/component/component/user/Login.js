import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Register from "./Register";
const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (valuesForm) => {},
  });

  const [dropdownRegister, setdropdownRegister] = useState(false);
  // const handle = () => {
  //   setDropDownUser(!dropdownUser);
  // };

  return (
    <>
      <div
        className={`${
          props.abc ? "" : "hidden"
        } h-screen bg-black-rgba-03 top-10 left-0 right-0  z-0 absolute`}
      >
        <div
          className={`block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto mt-20   z-20`}
        >
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputEmail2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                value={formik.values.email}
                name="email"
                type="email"
                className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={formik.handleChange}
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
                value={formik.values.password}
                name="password"
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Password"
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  value={formik.values.rememberMe}
                  name="rememberMe"
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                  onChange={formik.handleChange}
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
              Không phải tôi!
              <div className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out inline">
                Đăng kí
              </div>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
