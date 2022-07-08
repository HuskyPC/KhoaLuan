import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CartApi from "../../api/CartAPI";

const CartItem = (props) => {
  const [sl, setSL] = useState(props.sl ? props.sl : 0);
  const [result, setResul] = useState(0);
  const [product, setProduct] = useState("");
  const [isdelete, setIsdelete] = useState(false);
  useEffect(() => {
    setResul(result);
    (async () => {
      if (props.productID !== undefined) {
        const resopne = await CartApi.getProductbyID(props.productID);

        setProduct(resopne.data);
      }
    })();
  }, [props.productID, result]);

  async function fetchDataAgain(newsl, actions) {
    const formData = new FormData();
    formData.append("userID", props.user);
    formData.append("productID", props.productID);
    formData.append("quantity", newsl);
    formData.append("status", actions);
    (async () => {
      if (formData) {
        const respon = await CartApi.putchUpdateQuantityCart(formData);
        console.log("🚀 ~ file: CartItem.js ~ line 29 ~ respon", respon.status);
        if (respon.status === 201) {
          setResul(1);
        } else if (respon.status === 203) {
          setResul(2);

          toast.warning("Giỏ hàng có số lượng tối đa 10 sản phẩm", {
            className: "top-10",
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          setResul(true);
        } else if (respon.status >= 400 || respon.status <= 499) {
          setResul(3);
          toast.error(
            `Chức năng tăng sản phẩm ${product[0]?.name} thực hiện không thành công`,
            {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            }
          );
        }
      }
    })();
  }
  async function undateQuantity() {
    const respon = await CartApi.getQuantityByUserIDProductID(
      props.user,
      props.productID
    );
    if (respon.data) {
      setSL(respon.data);
    }
  }

  const tangSL = () => {
    if (sl >= 1 && sl < 10) {
      fetchDataAgain(sl + 1, 1);
      if (result === 1) {
        setSL(sl + 1);
        setResul(0);
      }
    }
  };

  const giamSL = () => {
    if (sl > 1 && sl <= 10) {
      fetchDataAgain(sl - 1, 0);
      if (result === 1) {
        setSL(sl - 1);
        setResul(0);
      }
    }
  };
  // console.log(
  //   "🚀 ~ file: CartItem.js ~ line 93 ~ delette ~  props.cartId",
  //   props.cartId
  // );
  const delette = () => {
    var answer = window.confirm(
      `Bạn chắn chắn muốn xóa '${product[0]?.name}' này!`
    );
    if (answer) {
      const formData = new FormData();
      formData.append("cartID", props.cartId);
      // formData.append("productID", props.productID);
      // formData.append("userID", props.user);
      // formData.append("quantity", sl);
      // formData.append("status", 1);
      if (formData) {
        (async () => {
          const respon = await CartApi.deleteCartItem(formData);
          if (respon.status === 201) {
            setIsdelete(true);
            toast.success("Xóa thành công", {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          } else if (respon.status >= 400 || respon <= 499) {
            toast.error("Không thể xóa! Có lỗi xảy ra", {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          }
        })();
      }
    }
  };
  return (
    <div
      className={`${
        isdelete === true ? "hidden" : ""
      } cart-item-content mt-2 bg-white p-2 text-center`}
    >
      <div className="card-item grid grid-cols-12">
        <div className="col-span-5 grid grid-cols-10 gap-2 text-left">
          <input
            className="col-span-1 mt-5  form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onClick={(e) => console.log(e.target.checked, props.cartId)}
          />
          <img
            src="asset/img/error/img/placeholder.png"
            alt="hinh anh"
            className="col-span-3 "
          />
          <p className="col-span-6 ">
            <Link
              to=""
              className=" nameProductNoBreak"
              title="product 1 product 1 product 1 product 1 product 1 product 1
                    product 1 product 1 product 1 product 1"
            >
              {product[0]?.name === undefined
                ? "sản phẩm thử nghiệm"
                : product[0]?.name}
            </Link>
            <span className="text-xs text-[#777] ">
              cấu hình Cấu hình Cấu hình Cấu hình
            </span>
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          {product[0]?.price === undefined ? 0 : product[0]?.price}
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <div className="buttons_added">
            <input
              className="minus is-form cursor-pointer"
              type="button"
              defaultValue="-"
              onClick={giamSL}
            />
            <input
              aria-label="quantity"
              className="input-qty"
              max="10"
              min="1"
              name="soLuong"
              type="number"
              readOnly
              value={sl}
            />
            <input
              className="plus is-form cursor-pointer"
              type="button"
              defaultValue="+"
              onClick={tangSL}
            />
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          {product[0]?.price === undefined ? 0 : product[0]?.price * sl}
        </div>
        <div className="flex items-center justify-center text-sm ">
          <i
            className="fa-solid fa-trash-can cursor-pointer "
            onClick={delette}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
