import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import CategoryAPI from "../../../api/CategoryAPI";

const CategoryCreate = () => {
  const [loading, setLoading] = useState(false);
  const [vaueSublit, setValueSubmit] = useState([]);
  console.log(
    "🚀 ~ file: CategoryCreate.js ~ line 9 ~ CategoryCreate ~ vaueSublit",
    vaueSublit
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      status: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(70, "Tên danh mục không quá 70 kí tự")
        .min(4, "Tên danh mục ít nhất 4 kí tự ")
        .required("Vui lòng nhập Tên danh mục"),
      status: Yup.string().required("Vui lòng chọn trạng thái cho danh mục"),
    }),
    onSubmit: (valuesForm) => {
      setValueSubmit({
        name: valuesForm.name,
        status: valuesForm.status,
      });
      setLoading(true);
      // setEmail(valuesForm.email);
      // setPassWord(valuesForm.password);
    },
  });
  //   loading khi submit form
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading === true) {
        toast.error("Thêm danh mục thất bại", {
          className: "top-10",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setLoading(false);
      } else {
        return () => clearTimeout(timeout);
      }
    }, 60000);

    return () => clearTimeout(timeout);
  }, [loading]);
  //   gui form ve api
  useEffect(() => {
    if (vaueSublit && loading) {
      const formData = new FormData();
      formData.append("name", vaueSublit.name);
      formData.append("status", vaueSublit.status);
      (async () => {
        try {
          const respon = await CategoryAPI.postCreateCategory(formData);
          if (respon.status >= 200 || respon.status <= 299) {
            toast.success("Thêm danh mục thành công", {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
            formik.resetForm({
              name: "",
              status: "",
            });
            setLoading(false);
          }
          if (respon.status >= 300) {
            toast.error("Thêm danh mục không thành công", {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
            setLoading(false);
          }
        } catch (error) {
          console.log("🚀 ~ file: CategoryCreate.js ~ line 51 ~ error", error);
        }
      })();
    }
  }, [loading, vaueSublit]);
  return (
    <div>
      <h3 className="text-3xl text-blue-600 font-medium pb-4">
        Thêm danh mục sản phẩm
      </h3>
      <div className="bg-white w-full p-3">
        <form onSubmit={formik.handleSubmit}>
          {/* name category */}
          <div className="form-group mb-3">
            <label
              htmlFor="nameip"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Tên danh mục sản phẩm
            </label>
            <input
              type="text"
              className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="nameip"
              placeholder="Nhập tên danh mục"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-sm text-red-500">{formik.errors.name}</div>
            ) : (
              ""
            )}
          </div>
          {/* status */}
          <div className="form-group mb-3">
            <label
              htmlFor="status"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Trạng thái
            </label>
            <br />
            <select
              defaultValue=""
              id="status"
              {...formik.getFieldProps("status")}
              className="w-1/2 form-control block   px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option selected>Chọn trạng thái </option>
              <option value={1}>Phát hành</option>
              <option value={0}>Ẩn</option>
            </select>
            {formik.touched.status && formik.errors.status ? (
              <div className="text-sm text-red-500">{formik.errors.status}</div>
            ) : (
              ""
            )}
          </div>
          {/* button submit form */}
          <div className="w-full flex items-center justify-center">
            {loading === true ? (
              <button
                type="button"
                className="  px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
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
                    strokeWidth="4"
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
                className="px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
                shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
                transition  duration-150  ease-in-out"
                // onClick={(kq) => (kq === 201 ? formik.resetForm() : "")}
              >
                Thêm danh mục
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryCreate;
