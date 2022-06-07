import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import RegisterTabAPI from "../../api/RegisterTabAPI";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterTab = () => {
  const [isUserName, setIsUserName] = useState("");
  const [objSubmitData, setObjSubmitData] = useState("");
  const [loading, setLoading] = useState(false);
  const [userNameApi, setUserNameAPI] = useState([]);

  useEffect(() => {
    async function fechData() {
      const reposeData = await RegisterTabAPI.getAllUserName();

      setUserNameAPI(reposeData.data);
    }

    fechData();
  }, []);

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fristName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Tên đăng nhập không quá 20 kí tự")
        .min(2, "Tên đăng nhập ít nhất 2 kí tự")
        .required("Vui lòng nhập 'Tên đăng nhập'"),
      // .test(
      //   "Tài khoảng chưa được sử dung",
      //   "Tài khoảng đã tồn tại ",
      //   function (userName) {
      //     console.log(
      //       "🚀 ~ file: RegisterTab.js ~ line 45 ~ RegisterTab ~ userName",
      //       userName
      //     );

      //     console.log(isUserName);
      //     return isUserName;
      //   }
      // ),
      fristName: Yup.string()
        .min(2, "Họ và tên đệm ít nhất 2 kí tự")
        .max(25, "Họ và tên không quá 25 kí tự")
        .required("Vui lòng nhập Họ và tên đệm"),
      lastName: Yup.string()
        .min(2, "Tên ít nhất 2 kí tự ")
        .max(15, "Tên không quá 25 kí tự ")
        .required("Vui lòng nhập Tên"),
      email: Yup.string()
        .email("Không đúng định dạng email")
        .required("Vui lòng nhập Email"),
      password: Yup.string()

        .min(6, "Password có ít nhất 6 kí tự")
        .max(25, "Password không quá 25 kí tự")
        .required("Vui lòng nhập 'Mật khẩu'"),
      //   regex pattern for password
      // .matches(/dieu kien loi/, 'thong bao moi')
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
        .required("Vui lòng nhập Xác nhận mật khẩu "),
    }),
    onSubmit: (valuesForm) => {
      setObjSubmitData({
        fristName: valuesForm.fristName,
        lastName: valuesForm.lastName,
        userName: valuesForm.userName,
        password: valuesForm.password,
        email: valuesForm.email,
      });
      // formik.resetForm({
      //   fristName: "",
      //   lastName: "",
      //   userName: "",
      //   email: "",
      //   password: "",
      //   confirmPassword: "",
      // });

      // setEmail(valuesForm.email);
      // setPassWord(valuesForm.password);
    },
  });
  useEffect(() => {
    async function fechData() {
      if (objSubmitData.length !== 0) {
        setLoading(true);
        const reposeData = await RegisterTabAPI.postCreateUsser(objSubmitData);
        if (reposeData.status === 201) {
          toast.success("Đăng ký thành công", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          formik.resetForm({
            fristName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setLoading(false);
          navigate("/login");
        } else if (reposeData.status >= 400 && reposeData < 500) {
          toast.error("Đăng ký thất bại", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
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
      toast.error("Đăng ký thất bại", {
        className: "top-10",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      // toast.error(`Đăng ký thất bại`, {
      //   position: toast.POSITION.TOP_RIGHT,
      //   autoClose: 3000,
      // });
    });
  }, [objSubmitData]);

  return (
    <div className={` h-100%  top-0 left-0 right-0  `}>
      <div
        className={`block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto mt-20`}
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group mb-3">
            <label
              htmlFor="fristName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Họ và tên đệm
            </label>
            <input
              type="text"
              className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="fristName"
              aria-describedby="emailHelp"
              placeholder="Họ và tên đệm"
              {...formik.getFieldProps("fristName")}
            />
            {formik.touched.fristName && formik.errors.fristName ? (
              <div className="text-sm text-red-500">
                {formik.errors.fristName}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label
              htmlFor="lastName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Tên
            </label>
            <input
              type="text"
              className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="lastName"
              placeholder="Tên"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-sm text-red-500">
                {formik.errors.lastName}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label
              htmlFor="userName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Tên đăng nhập
            </label>
            <input
              type="text"
              className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="userName"
              placeholder="Nhập tên đăng nhập"
              {...formik.getFieldProps("userName")}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className="text-sm text-red-500">
                {formik.errors.userName}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label
              htmlFor="emails"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="emails"
              aria-describedby="emailHelp"
              placeholder="Nhập email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-sm text-red-500">{formik.errors.email}</div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label
              htmlFor="passwords"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="passwords"
              placeholder="Nhập mật khẩu"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-sm text-red-500">
                {formik.errors.password}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Nhập lại mật khẩu
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              {...formik.getFieldProps("confirmPassword")}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-sm text-red-500">
                {formik.errors.confirmPassword}
              </div>
            ) : (
              ""
            )}
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
              onClick={(kq) => (kq === 201 ? formik.resetForm() : "")}
            >
              Đăng Ký
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterTab;
