import { useFormik } from "formik";
import * as Yup from "yup";
import ReactDOM from "react-dom";

const Register = ({ open = false, handleClose = () => {} }) => {
  const formik = useFormik({
    initialValues: {
      fristName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
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
        .required("Vui lòng nhập Password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password không khớp")
        .required("Vui lòng nhập Xác nhận mật khẩu "),
    }),
    onSubmit: (valuesForm) => {
      // setEmail(valuesForm.email);
      // setPassWord(valuesForm.password);
    },
  });
  if (typeof document === undefined) {
    return <div className="model"></div>;
  }
  return ReactDOM.createPortal(
    <div
      className={`${
        open ? "" : "hidden"
      } h-screen bg-black-rgba-03 top-10 left-0 right-0  z-10 absolute`}
      onClick={handleClose}
    >
      <div
        className={`block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto mt-5   z-20`}
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
              aria-describedby="emailHelp"
              placeholder="Họ và tên đệm"
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
              placeholder="Email"
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
              Password
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="passwords"
              placeholder="Password"
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
              Nhập lại password
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="confirmPassword"
              placeholder="Nhập lại password"
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

          <button
            type="submit"
            className="   w-full  px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
                shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
                transition  duration-150  ease-in-out"
          >
            Đăng Ký
          </button>
        </form>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Register;
