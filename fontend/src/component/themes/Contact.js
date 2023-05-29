import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  document.title = "Liên hệ";
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Không đúng định dạng email")
        .required("Vui lòng nhập Email"),
    }),
    onSubmit: (valuesForm) => {},
  });
  return (
    <div className="text-center ">
      <div className=" bg-white mt-12 grid grid-cols-5 px-20 ">
        <div className="col-span-2 text-left py-8">
          <h3 className="text-lg ">Website Laptop TB</h3>
          <div className="w-full text-sm mt-4 text-gray-400 Link:nth-child ">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/H%E1%BA%BBm+89,+%C4%90%C6%B0%E1%BB%9Dng+L%C3%A0ng+T%C4%83ng+Ph%C3%BA/@10.8447936,106.7967918,17z/data=!3m1!4b1!4m5!3m4!1s0x3175273ebc7fc351:0xc14a1cd8fc2b6308!8m2!3d10.8447867!4d106.7989803?hl=vi-VN"
              rel="noopener noreferrer"
              className="block hover:text-blue-500 py-1 text-xs"
            >
              Hẻm 89, Đường Làng Tăng Phú, Làng Tăng Phú, Tăng Nhơn Phú A, Quận
              9, Thành phố Hồ Chí Minh
            </a>
            <h4 className="block hover:text-blue-500 py-1">
              Phone: 0123456789
            </h4>
            <h4 className="block hover:text-blue-500 py-1">
              Email: binh1432001@gmail.com
            </h4>
          </div>
        </div>
        <div className="col-span-3 py-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.82022905807594!2d106.79906262396219!3d10.844805395535795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175273ebc7fc351%3A0xc14a1cd8fc2b6308!2zSOG6u20gODksIMSQxrDhu51uZyBMw6BuZyBUxINuZyBQaMO6!5e0!3m2!1svi!2s!4v1656184079856!5m2!1svi!2s"
            width={700}
            height={400}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="my map"
          />
        </div>
      </div>
      <div className=" w-full mt-16">
        <h1 className="text-2xl">Bạn cần sự trợ giúp?</h1>
        <h3 className=" text-sm font-light mt-6">
          Vui lòng viết câu hỏi vào biểu mẫu bên dưới
        </h3>
        <div className=" mt-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3 ">
              <textarea
                className=" w-96 p-4"
                height={700}
                rows="10"
                placeholder="Nhập câu hỏi ..."
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="email"
                className=" w-96  m-auto form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="emails"
                aria-describedby="emailHelp"
                placeholder="Nhập email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-sm text-red-500">
                  {formik.errors.email}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="   w-96  px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
                 shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
                 transition  duration-150  ease-in-out"
              >
                Gửi câu hỏi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
