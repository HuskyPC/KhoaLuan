import React, { useCallback, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import imgAccDefault from "../../account/defaultAccountImg.png";
import { Link } from "react-router-dom";

const Edit = () => {
  const [avatar, setAvatar] = useState();
  const [tempAvatar, setTepAvatar] = useState();
  const [tempAvatar2, setTepAvatar2] = useState();
  const [tosatImg, setToastImg] = useState(false);
  const [edSdt, setEdSdt] = useState(false);
  const [edEmail, setEDEmail] = useState(false);
  const [edLocation, setEdLocation] = useState(false);
  const formik = useFormik({
    initialValues: {
      fristName: "",
      lastName: "",
      tempAvatar: "",
      avatar: "",
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
  const handleOnSubmit = (e) => {
    handlePreviewAvatar(e);
    // formik.setFieldValue("tempAvatar", e.currentTarget.files[0]);
  };
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    setTepAvatar2(file);
    // file = URL.createObjectURL(file);
    setTepAvatar(URL.createObjectURL(file));
  };
  const uploadImg = () => {
    setToastImg(false);
    setAvatar(tempAvatar2);
    toast.warning("Bạn cần nhấn lưu để lưu hình", {
      className: "top-10",
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  const deleteImgTemp = () => {
    setToastImg(false);
    setTepAvatar("");
  };
  return (
    <>
      <h1 className="text-lg text-blue-500 font-light">Thông tin tài khoảng</h1>
      <div className="w-full bg-white  mt-4 p-3 rounded grid grid-cols-10  ">
        <div
          className={`${
            tosatImg === false ? "hidden" : "flex"
          } absolute top-0 left-0 right-0 z-50 w-full bg-black-rgba-03  items-center justify-center h-full min-h-full`}
        >
          <div className=" bg-white w-72 h-72 p-5 relative">
            <i
              className="fa-solid fa-xmark top--1 right-2 absolute bg-blue-400 rounded-full p-2 "
              onClick={deleteImgTemp}
            ></i>
            <div className={`${tempAvatar ? "hidden" : ""}`}>
              <input
                className="hidden"
                type="file"
                id="toastImg"
                accept="image/*"
                onChange={handleOnSubmit}
              />
              <label
                htmlFor="toastImg"
                className="border-2 border-dashed  h-32 flex items-center justify-center"
              >
                Nhấn để chọn ảnh
              </label>
            </div>
            <img
              src={`${tempAvatar ? tempAvatar : ""}`}
              alt=" hi anh"
              className={`${tempAvatar ? "block" : "hidden"} w-full h-40`}
            />
            <button
              onClick={() => setTepAvatar("")}
              className={`${tempAvatar ? "" : "hidden"} text-red-500 p-2 `}
            >
              Xóa
            </button>
            <button
              onClick={uploadImg}
              className=" col-span-2  w-full mt-3 px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
                shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
                transition  duration-150  ease-in-out"
            >
              Tải lên
            </button>
          </div>
        </div>
        <form className="col-span-6">
          <span className="col-span-12 block pb-4">Thông tin cá nhân </span>
          <div className="grid grid-cols-9 gap-3">
            <span
              className="col-span-2"
              readOnly
              onClick={() => setToastImg(true)}
            >
              <div className=" relative">
                <img
                  src={
                    avatar ? URL.createObjectURL(tempAvatar2) : imgAccDefault
                  }
                  alt="hinh anh"
                  className=" rounded-full col-span-2 "
                  onClick={() => setToastImg(true)}
                />
                <i className="fas fa-pencil-alt absolute right-2 bottom-2 p-1 bg-gray-rgba-1 rounded-full text-xs "></i>
              </div>
            </span>
            <div className=" col-span-7 p-2">
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
              <div className="form-group mb-3 grid grid-cols-3">
                <label htmlFor="meeting-time">Ngày sinh</label>

                <input
                  type="datetime-local"
                  id="meeting-time"
                  value=""
                  name="meeting-time"
                  min="1930-01-01T00:00"
                  max="2021-12-01T00:00"
                  className="col-span-2 form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
        <div className="w-full col-span-4 p-2">
          <span className="col-span-12 block pb-4">Thông tin khác</span>
          <div className="grid grid-cols-12 gap-2 text-sm mt-2">
            <div className={`${edSdt ? "hidden" : "block"} icon col-span-9`}>
              <i className="fa-solid fa-phone  float-left text-xl mt-2"></i>
              <span className="float-left ml-3 w-">
                Số điện thoại <br /> 0123456789
              </span>
            </div>
            <div className={`${edSdt ? "block" : "hidden"} icon col-span-9`}>
              <label htmlFor="edSdt">Số điện thoại</label>
              <br />
              <input
                id="edSdt"
                type="number"
                className="col-span-2 form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <span
              onClick={() => setEdSdt(true)}
              className={`${
                edSdt ? "hidden" : "flex"
              } col-span-3 border-[1px] border-blue-400 h-7 items-center justify-center mt-2 cursor-pointer`}
            >
              cập nhật
            </span>

            <span
              onClick={() => setEdSdt(false)}
              className={`${
                edSdt ? "flex" : "hidden"
              } col-span-3 border-[1px] border-blue-400 h-7 flex items-center justify-center mt-6 cursor-pointer`}
            >
              Hủy
            </span>
          </div>
          <div className="grid grid-cols-12 gap-2 text-sm mt-2">
            <div className={`${edEmail ? "hidden" : "block"} icon col-span-9`}>
              <i className="fa-solid fa-envelope  float-left text-xl mt-2"></i>
              <span className="float-left ml-3 w-">
                Email <br /> binh@gmail.com
              </span>
            </div>
            <div className={`${edEmail ? "block" : "hidden"} icon col-span-9`}>
              <label htmlFor="edemail">Email</label>
              <br />
              <input
                id="edemail"
                type="email"
                className="col-span-2 form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <span
              onClick={() => setEDEmail(true)}
              className={`${
                edEmail ? "hidden" : "flex"
              } col-span-3 border-[1px] border-blue-400 h-7 items-center justify-center mt-2 cursor-pointer`}
            >
              cập nhật
            </span>
            <span
              onClick={() => setEDEmail(false)}
              className={`${
                edEmail ? "flex" : "hidden"
              } col-span-3 border-[1px] border-blue-400 h-7 flex items-center justify-center mt-6 cursor-pointer`}
            >
              Hủy
            </span>
          </div>
          <div className="grid grid-cols-12 gap-2 text-sm mt-2">
            <div
              className={`${edLocation ? "hidden" : "block"} icon col-span-9`}
            >
              <i className="fa-solid fa-location-dot  float-left text-xl mt-2"></i>
              <span className="float-left ml-3 w-">
                Địa chỉ <br /> abc
              </span>
            </div>
            <div
              className={`${edLocation ? "block" : "hidden"} icon col-span-9`}
            >
              <label htmlFor="edSdt">Địa chỉ</label>
              <br />
              <input
                id="edSdt"
                type="number"
                className="col-span-2 form-control  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <span
              onClick={() => setEdLocation(true)}
              className={`${
                edLocation ? "hidden" : "flex"
              } col-span-3 border-[1px] border-blue-400 h-7 items-center justify-center mt-2 cursor-pointer`}
            >
              cập nhật
            </span>
            <span
              onClick={() => setEdLocation(false)}
              className={`${
                edLocation ? "flex" : "hidden"
              } col-span-3 border-[1px] border-blue-400 h-7 flex items-center justify-center mt-6 cursor-pointer`}
            >
              Hủy
            </span>
          </div>
        </div>
        <div className="col-start-3 col-span-6 form-group mb-3 grid grid-cols-3">
          <span></span>
          <button
            type="submit"
            className=" col-span-2  w-full  px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
                shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
                transition  duration-150  ease-in-out"
          >
            Lưu Thay đổi
          </button>
        </div>
      </div>
    </>
  );
};

export default Edit;
