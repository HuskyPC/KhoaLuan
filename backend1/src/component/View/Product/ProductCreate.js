import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import ProductApi from "../../../api/ProductApi";
const ProductCreate = () => {
  const [loading, setLoading] = useState(false);
  const [objSubmitData, setObjSubmitData] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      priceSale: "",
      avatar: "",

      brandID: "",
      shortDes: "",
      fullDes: "",
      status: "",
      amount: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(200, "Tên sản phẩm không quá 200 kí tự")
        .min(4, "Tên sản phẩm ngắn nhất 4 kí tự ")
        .required("vui lòng nhập tên sản phẩm"),
      price: Yup.number()
        .min(1000, "Giá thấp nhất là 1000")
        .required("vui lòng nhập số tiền"),
      priceSale: Yup.number()
        .max(Yup.ref("price"), "giá giảm nhỏ hơn giá bán")
        .min(0, "Giá thấp nhất là 0")
        .required("vui lòng nhập số tiền"),
      avatar: Yup.object().shape().nullable(),
      brandID: "",
      shortDes: "",
      fullDes: "",
      status: "",
      amount: "",
    }),

    onSubmit: (valuesForm) => {
      setObjSubmitData({
        name: valuesForm.name,
        price: valuesForm.price,
        priceSale: valuesForm.priceSale,
        avatar: valuesForm.avatar,
      });
      formik.resetForm({
        name: "",
        price: "",
        priceSale: "",
        avarta: "",
        brandID: "",
        shortDes: "",
        fullDes: "",
        status: "",
        amount: "",
      });

      // setEmail(valuesForm.email);
      // setPassWord(valuesForm.password);
    },
  });
  useEffect(() => {
    async function fechData() {
      const formData = new FormData();
      formData.append("name", objSubmitData.name);
      formData.append("price", objSubmitData.price);
      formData.append("priceSale", objSubmitData.priceSale);
      formData.append("file", objSubmitData.avatar);
      // formData.append('brandID',objSubmitData.name);
      // formData.append('slug',objSubmitData.name);
      // formData.append('shortDes',objSubmitData.name);
      // formData.append('fullDes',objSubmitData.name);
      // formData.append('status',objSubmitData.name);

      if (formData !== null) {
        setLoading(true);
        const reposeData = await ProductApi.postCreteProduct(formData);
        if (reposeData.status === 201) {
          toast.success("Đăng ký thành công", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });

          setLoading(false);
          Navigate("/login");
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
    <div>
      <h3 className="text-3xl text-blue-600 font-medium pb-4">Thêm sản phẩm</h3>
      <div className={` h-100%  top-0 left-0 right-0  `}>
        <div className={`block p-6 rounded-lg shadow-lg bg-white  `}>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label
                htmlFor="name"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Tên sản phẩm
              </label>
              <input
                type="text"
                className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Nhập tên sản phẩm"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-sm text-red-500">{formik.errors.name}</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="price"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Giá bán
              </label>
              <input
                type="number"
                className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="price"
                placeholder="Nhập giá bán "
                {...formik.getFieldProps("price")}
              />
              {formik.touched.price && formik.errors.price ? (
                <div className="text-sm text-red-500">
                  {formik.errors.price}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="priceSale"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Giá giảm
              </label>
              <input
                type="number"
                className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="priceSale"
                aria-describedby="emailHelp"
                placeholder="Nhập giá bán "
                {...formik.getFieldProps("priceSale")}
              />
              {formik.touched.priceSale && formik.errors.priceSale ? (
                <div className="text-sm text-red-500">
                  {formik.errors.priceSale}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="avatar"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Ảnh đại diện
              </label>
              <input
                type="file"
                className="form-control block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="avatar"
                aria-describedby="emailHelp"
                placeholder="Nhập giá bán "
                accept="image/png, image/jpeg"
                required
                onChange={(event) => {
                  formik.setFieldValue("avatar", event.currentTarget.files[0]);
                }}
                name="avatar"
                // {...formik.getFieldProps("avatar")}
              />
              {formik.touched.avatar && formik.errors.avatar ? (
                <div className="text-sm text-red-500">
                  {formik.errors.avatar}
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
    </div>
  );
};

export default ProductCreate;
