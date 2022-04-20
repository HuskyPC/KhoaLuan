import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import LoginClientAPI from "../../api/LoginClientAPI";
import { useNavigate } from "react-router-dom";
const LoginTab = () => {
  const [objUser, setObjUser] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Không đúng định dạng email")
        .required("Vui lòng nhập Email"),
      password: Yup.string()
        .min(6, "Password có ít nhất 6 kí tự")
        .max(25, "Password không quá 25 kí tự")
        .required("Vui lòng nhập Password"),
    }),
    onSubmit: (valuesForm) => {
      setObjUser({
        email: valuesForm.email,
        password: valuesForm.password,
        rememberMe: valuesForm.rememberMe,
      });
    },
  });
  useEffect(() => {
    async function fechData() {
      if (objUser.length !== 0) {
        setLoading(true);
        const reposeData = await LoginClientAPI.postLoginUser(objUser);
        if (
          reposeData.status >= 200 &&
          reposeData.status < 300 &&
          reposeData.data.length !== 0
        ) {
          toast.success("Đăng nhập thành công", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          if (objUser.rememberMe === true) {
            let myObj = {
              userID: reposeData.data.userID,
              lastName: reposeData.data.lastName,
              fristName: reposeData.data.fristName,
              avatar: reposeData.data.avatar,
              urlImage: reposeData.data.urlImage,
              access: reposeData.data.access,
            };
            localStorage.setItem("user", JSON.stringify(myObj));
          } else {
            let myObj = {
              userID: reposeData.data.userID,
              lastName: reposeData.data.lastName,
              fristName: reposeData.data.fristName,
              avatar: reposeData.data.avatar,
              urlImage: reposeData.data.urlImage,
              access: reposeData.data.access,
            };
            sessionStorage.setItem("user", JSON.stringify(myObj));
          }
          setLoading(false);
          navigate("/home");
        } else if (
          reposeData.status >= 200 &&
          reposeData.status < 500 &&
          reposeData.data.length === 0
        ) {
          toast.error(
            "Đăng Nhập thất bại, bạn chắc rằng nhập đúng Email và password !",
            {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            }
          );
          setLoading(false);
        } else if (reposeData.status >= 500) {
          toast.warning("Có sự cố xảy ra chúng tôi rất tiếc vì điều này", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          setLoading(false);
        }
      }
    }
    fechData().catch(() => {
      setLoading(false);
    });
  }, [objUser]);

  return (
    <div
      className={`
       h-100%  top-0 left-0 right-0 `}
    >
      <div
        className={`block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto mt-40   `}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-6">
            <label
              htmlFor="email"
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
              id="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-sm text-red-500">{formik.errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="password"
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
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-sm text-red-500">
                {formik.errors.password}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                value={formik.values.rememberMe}
                name="rememberMe"
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="rememberMe"
                onChange={formik.handleChange}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="rememberMe"
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
          {loading === true ? (
            <button
              type="button"
              className="w-full  px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
            shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
            transition  duration-150  ease-in-out flex items-center justify-center"
              disabled
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Tôi đang thực hiện yêu cầu của bạn
            </button>
          ) : (
            <button
              type="submit"
              className="   w-full  px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
              shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
              transition  duration-150  ease-in-out"
            >
              Đăng nhập
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginTab;
