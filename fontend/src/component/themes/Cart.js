import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartApi from "../api/CartAPI";
import CartItem from "../component/cart/CartItem";
import useGetLocalSec from "../hook/useGetLocalSec";
import * as Yup from "yup";
import { useFormik } from "formik";
const Cart = () => {
  document.title = "Giỏ Hàng";

  const [cart, setCart] = useState();
  const userID = useGetLocalSec("user");
  const [in4User, setIn4User] = useState();
  const [isChangeAdress, setIsChangeAddress] = useState(false);

  useEffect(() => {
    async function fechData() {
      (async () => {
        const respon = await CartApi.getItemCardByUserID(userID);
        if (respon.data) {
          setCart(respon.data);
        }
      })();
      if (userID) {
        (async function fetchIn4() {
          const respon = await CartApi.getInformationInCart(userID);
          // console.log(
          //   "🚀 ~ file: Cart.js ~ line 25 ~ fetchIn4 ~ respon.data",
          //   respon.data
          // );
          if (respon.data) {
            setIn4User(respon.data);
          }
        })();
      }
    }
    fechData();
  }, [userID]);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Tên đăng nhập không quá 20 kí tự")
        .min(2, "Tên đăng nhập ít nhất 2 kí tự")
        .required("Vui lòng nhập 'Tên đăng nhập'"),
      name: Yup.string()
        .min(2, "Họ và tên có nhiều nhất 2 kí tự")
        .max(50, "Họ và tên không quá 50 kí tự")
        .required("Vui lòng nhập Họ và tên "),
      address: Yup.string()
        .min(10, "Địa chỉ ít nhất 10 kí tự  ")
        .max(150, "Địa chỉ không quá 150 kí tự ")
        .required("Vui lòng nhập Địa chỉ"),
      email: Yup.string()
        .email("Không đúng định dạng email")
        .required("Vui lòng nhập Email"),
      phone: Yup.number()
        .min(99999999, "Số điện thoại có 10 chữ số")
        .max(999999999, "Số điện thoại phải có 10 chữa số")
        .required("Vui lòng nhập số điện thoại"),
    }),
    onSubmit: (valuesForm) => {
      console.log(
        "🚀 ~ file: Cart.js ~ line 69 ~ Cart ~ valuesForm",
        valuesForm
      );

      setIsChangeAddress(false);
      // setIn4User({
      //   fristName: valuesForm.name,
      //   phone: valuesForm.phone,
      //   address: valuesForm.address,
      //   email: valuesForm.email,
      // });
    },
  });

  return (
    <div className="min-h-full">
      {/* {console.log(
        "🚀 ~ file: Cart.js ~ line 93 ~ Cart ~  email: valuesForm.email,",
        in4User?.email
      )} */}
      <div className="header-cart mt-11  px-20 w-full bg-white p-2">
        <span className="text-3xl font-light">Giỏ hàng </span>
      </div>
      {userID === undefined || cart === undefined || cart.length === 0 ? (
        <div className="w-full text-center font-light">
          <h1 className=" mt-6 text-2xl ">Giỏ hàng của bạn đang trống! </h1>
          <Link to="/" className="text-blue-400">
            Quay lại trang chủ thêm sản phẩm
          </Link>
        </div>
      ) : (
        <div className="cart mt-4 px-20 grid grid-cols-10 gap-4 h-auto">
          <div className="col-span-7  ">
            {/* header cart control */}
            <div className="cart-control grid grid-cols-12 text-center text-sm bg-white p-2">
              <div className="col-span-5">
                <input
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  className="  form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />
                <label
                  htmlFor="selectAll"
                  className="block cursor-pointer text-left "
                >
                  Tất cả
                </label>
              </div>
              <div className="col-span-2">Đơn giá</div>
              <div className="col-span-2">Số lượng</div>
              <div className="col-span-2">Thành tiền</div>
              <div>
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
            {/* cart item */}
            {/* {cartcount?.cart?.map((item, index) =>
              item.id === "" ? (
                ""
              ) : (
                <CartItem
                  key={item.id}
                  id={item.id}
                  sl={item.amount}
                  user={userID}
                  cartCount={cartcount}
                />
              )
            )} */}
            {cart.map((item, index) => (
              <CartItem
                key={item.cartID}
                cartId={item.cartID}
                productID={item.productID}
                sl={item.quantity}
                user={userID}
              />
            ))}
          </div>
          <div className="col-span-3 ">
            <div className=" bg-white p-2">
              <div className="grid grid-cols-2">
                <span>Giao tới</span>
                <span
                  className={`${
                    isChangeAdress === true ? "hidden" : ""
                  } text-right text-blue-400 text-base cursor-pointer`}
                  onClick={() => setIsChangeAddress(true)}
                >
                  Thay đổi
                </span>
                <span
                  className={`${
                    isChangeAdress === false ? "hidden" : ""
                  } text-right text-blue-400 text-base cursor-pointer`}
                  onClick={() => setIsChangeAddress(false)}
                >
                  Hủy
                </span>
              </div>
              {in4User && isChangeAdress === false && (
                <p>
                  {in4User.fristName + " " + in4User.lastName} | {in4User.phone}{" "}
                  | {in4User.address}
                </p>
              )}
              {isChangeAdress === true && (
                <div className="w-full mt-2">
                  <form onSubmit={formik.handleSubmit}>
                    <label
                      htmlFor="name"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Tên người nhận
                    </label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-sm text-red-500">
                        {formik.errors.name}
                      </div>
                    ) : (
                      ""
                    )}
                    <label
                      htmlFor="sdt"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Số điện thoại
                    </label>
                    <br />
                    <input
                      type="number"
                      id="sdt"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      {...formik.getFieldProps("phone")}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-sm text-red-500">
                        {formik.errors.phone}
                      </div>
                    ) : (
                      ""
                    )}
                    <label
                      htmlFor="email"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Email
                    </label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-sm text-red-500">
                        {formik.errors.email}
                      </div>
                    ) : (
                      ""
                    )}
                    <label
                      htmlFor="newAdrress"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Địa chỉ
                    </label>
                    <br />
                    <input
                      type="text"
                      id="newAdrress"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                border border-solid border-gray-300  rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      {...formik.getFieldProps("address")}
                    />
                    {formik.touched.address && formik.errors.address ? (
                      <div className="text-sm text-red-500">
                        {formik.errors.address}
                      </div>
                    ) : (
                      ""
                    )}
                    <button
                      type="submit"
                      className=" mt-3  w-full  px-6  py-2.5 bg-blue-600  text-white  font-medium text-xs  leading-tight  uppercase  rounded
                shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg
                transition  duration-150  ease-in-out"
                    >
                      Giao đến địa chỉ này
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
