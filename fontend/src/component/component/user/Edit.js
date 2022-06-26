import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import imgAccDefault from "../../account/defaultAccountImg.png";

const Edit = () => {
  const formik = useFormik({
    initialValues: {
      fristName: "",
      lastName: "",
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
    }),
    onSubmit: (valuesForm) => {
      // setEmail(valuesForm.email);
      // setPassWord(valuesForm.password);
    },
  });
  return (
    <>
      <h1 className="text-lg text-blue-500 font-light">Thông tin tài khoảng</h1>
      <div className="w-full bg-white  mt-4 p-3 rounded grid grid-cols-10">
        <form className="col-span-6">
          <span className="col-span-12 block pb-4">Thông tin cá nhân </span>
          <div className="grid grid-cols-9 gap-3">
            <span className="col-span-2">
              <div className=" relative">
                <img
                  src={imgAccDefault}
                  alt="hinh anh"
                  className=" rounded-full col-span-2 "
                />
                <i className="fas fa-pencil-alt absolute right-2 bottom-2 p-1 bg-gray-rgba-1 rounded-full text-xs "></i>
              </div>
            </span>
            <div className=" col-span-7 ">
              <div className=" form-group mb-3 grid grid-cols-3">
                <label
                  htmlFor="fristName"
                  className="form-label mb-2 text-gray-700 col-span-1"
                >
                  Họ và tên đệm
                </label>
                <input
                  type="text"
                  className="col-span-2 form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="fristName"
                  aria-describedby="emailHelp"
                  placeholder="Họ và tên đệm"
                  {...formik.getFieldProps("fristName")}
                />
                {formik.touched.fristName && formik.errors.fristName ? (
                  <>
                    <div className="col-span-1 "></div>
                    <div className="text-sm text-red-500 col-span-2 float-right">
                      {formik.errors.fristName}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group mb-3 grid grid-cols-3">
                <label
                  htmlFor="lastName"
                  className="form-label mb-2 text-gray-700 col-span-1"
                >
                  Tên
                </label>
                <input
                  type="text"
                  className="col-span-2 form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="lastName"
                  aria-describedby="emailHelp"
                  placeholder="Họ và tên đệm"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <>
                    <div className="col-span-1 "></div>
                    <div className="text-sm text-red-500 col-span-2 float-right">
                      {formik.errors.lastName}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
