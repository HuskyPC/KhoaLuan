import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { toast } from "react-toastify";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import ProductDetailAPI from "../api/ProductDetail";
import useGetLocalSec from "../hook/useGetLocalSec";
import CartApi from "../api/CartAPI";

const ProductByID = () => {
  let { id } = useParams();
  const UserID = useGetLocalSec("user");
  const [sl, setSL] = useState(1);

  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await ProductDetailAPI.getProductDetail(id);
        setProductDetail(response.data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [id]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const numberFormat = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  const hadleAddToCart = () => {
    if (UserID !== undefined) {
      const formData = new FormData();
      formData.append("userID", UserID);
      formData.append("productID", id);
      formData.append("quantity", sl);
      (async () => {
        try {
          const response = await CartApi.postInsertCart(formData);
          console.log(
            "🚀 ~ file: ProductItem.js ~ line 26 ~ response",
            response.status
          );
          if (response.status === 201) {
            toast.success("Thêm vào giỏ hàng thành công", {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          } else if (response.status === 202) {
            toast.warning("Sản phẩm đã có trong giỏ hàng", {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          } else if (response.status === 203) {
            toast.warning("Giỏ hàng có số lượng tối đa 10 sản phẩm", {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          } else if (response.status >= 400 || response.status <= 499) {
            toast.error("Thêm vào giỏ hàng không thành công", {
              className: "top-10",
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          }
        } catch (error) {
          console.log(error.message);
        }
      })();
    } else
      toast.warning(
        "Bạn cần đăng nhập để thêm sản phẩm, chúng tôi xin lỗi vì sự bất tiện này!",
        {
          className: "top-10",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        }
      );
  };

  const tangSL = () => {
    if (sl >= 1 && sl < 10) {
      setSL(sl + 1);
    }
  };

  const giamSL = () => {
    if (sl > 1 && sl <= 10) {
      setSL(sl - 1);
    }
  };
  return (
    <>
      <section className="mt-10 md:mt-16 main md:px-20">
        {/* img and name product */}
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-3   ">
          {/* img product */}
          <div className="productImage md:col-span-3 relative bg-white">
            <Swiper
              style={{
                "--swiper-navigation-color": "rgb(59 130 246)",
                "--swiper-pagination-color": "rgb(59 130 246)",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 md:h-[400px] "
            >
              <SwiperSlide>
                <img
                  className="h-full m-auto"
                  src="../asset/img/product/product1.jpg"
                  alt="hinh anh"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-full m-auto"
                  src="../asset/img/product/product2.jpg"
                  alt="hinh anh"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper h-[50px] w-[200px] absolute bottom-0 left-0 right-0"
            >
              <SwiperSlide>
                <img
                  className="h-3/4"
                  src="../asset/img/product/product1.jpg"
                  alt="hinh anh"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="h-3/4"
                  src="../asset/img/product/product2.jpg"
                  alt="hinh anh"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* name product */}
          <div className="productContent col-span-2 bg-white p-4">
            <h2 className=" text-3xl first-letter:uppercase">
              {productDetail?.name}
            </h2>
            <div className="mt-7 pb-5 grid grid-cols-4 gap-2 ">
              {/* <button className="p-1.5  border-[1px] border-gray-400 text-gray-500 rounded relative">
                core i3 4030-ram 6gb-ssd 120gb <br /> {numberFormat(2000000)}
              </button>
              <button className="p-1.5  border-[1px] border-blue-500 text-blue-900 rounded relative">
                core i3 4030-ram 6gb-ssd 120gb <br /> {numberFormat(2000000)}
              </button> */}
            </div>

            {productDetail?.priceSale !== 0 ? (
              <>
                <span className="price text-blue-500 text-3xl ">
                  {numberFormat(productDetail?.priceSale)}
                </span>
                <span
                  className={` priceSale text-xs line-through text-red-500`}
                >
                  {numberFormat(productDetail?.price)}
                </span>
              </>
            ) : (
              ""
            )}
            <div className="mt-5">
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
            <div className="grid auto-rows-max grid-cols-2 mt-7 md:p-4">
              <div
                className=" first-letter:uppercase font-light text-white cursor-pointer "
                onClick={hadleAddToCart}
              >
                <span className="bg-black rounded-full text-[12px] md:text-xs text-center p-3 max-w-[30px] hover:bg-blue-500">
                  <i className="fa-solid fa-cart-shopping "></i>
                  &nbsp;Thêm vào giỏ hàng
                </span>
              </div>
              {/* <Link
                to="/"
                className="heart text-center hover:text-blue-500 font-light "
              >
                <i className="far fa-heart "></i>&nbsp;Yêu thích */}
              {/* <i className="fas fa-heart text-blue-700"></i> */}
              {/* </Link> */}
            </div>
          </div>
        </div>
        {/* description */}
        <div className="description  mt-3 grid md:grid-cols-5 md:gap-3">
          <div className="desc-content bg-white  md:col-span-3 p-8 ">
            <h3 className="text-3xl capitalize pb-10">Mô tả sản Phẩm</h3>
            <p>
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: productDetail?.fullDes }}
              ></div>
            </p>
          </div>
          {/* details product cấu hình sản phẩm */}
          {/* <div className="details p-8 md:col-span-2 bg-white">
            <table className="table-auto w-full">
              <tbody>
                <tr className="leading-10">
                  <td className="border-b-[1px] border-black-rgba-03 leading-5">
                    Malcolm Lockyer
                  </td>
                  <td className="border-b-[1px] border-black-rgba-03">1961</td>
                </tr>
                <tr className="leading-10">
                  <td className="border-b-[1px] border-black-rgba-03 leading-5">
                    Malcolm Lockyer
                  </td>
                  <td className="border-b-[1px] border-black-rgba-03">1961</td>
                </tr>
                <tr className="leading-10">
                  <td className="border-b-[1px] border-black-rgba-03 leading-5">
                    Malcolm Lockyer
                  </td>
                  <td className="border-b-[1px] border-black-rgba-03">1961</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default ProductByID;
