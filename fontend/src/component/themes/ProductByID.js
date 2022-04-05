import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductByID = () => {
  // let { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const numberFormat = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);

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
            <h2 className=" text-3xl first-letter:uppercase">product1</h2>
            <div className="mt-7 pb-5 grid grid-cols-4 gap-2 ">
              <button className="p-1.5  border-[1px] border-gray-400 text-gray-500 rounded relative">
                core i3 4030-ram 6gb-ssd 120gb <br /> {numberFormat(2000000)}
              </button>
              <button className="p-1.5  border-[1px] border-blue-500 text-blue-900 rounded relative">
                core i3 4030-ram 6gb-ssd 120gb <br /> {numberFormat(2000000)}
              </button>
            </div>

            <span className="price text-blue-500 text-3xl ">
              {numberFormat(2000000)}
            </span>
            <span className={` priceSale text-xs line-through text-red-500`}>
              {numberFormat(28000000)}
            </span>
            <div className="grid auto-rows-max grid-cols-2 mt-5 md:p-4">
              <Link
                to="/"
                className=" first-letter:uppercase font-light text-white  "
              >
                <span className="bg-black rounded-full text-[12px] md:text-xs text-center p-3 max-w-[30px] hover:bg-blue-500">
                  <i className="fa-solid fa-cart-shopping "></i>&nbsp;Thêm vào
                  giỏ hàng
                </span>
              </Link>
              <Link
                to="/"
                className="heart text-center hover:text-blue-500 font-light "
              >
                <i className="far fa-heart "></i>&nbsp;Yêu thích
                {/* <i className="fas fa-heart text-blue-700"></i> */}
              </Link>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="description  mt-3 grid md:grid-cols-5 md:gap-3">
          <div className="desc-content bg-white  md:col-span-3 p-8 ">
            <h3 className="text-3xl capitalize pb-10">Name Product</h3>
            <p>bhjdsbjhfbsdjvfksvfjsdvkfds</p>
          </div>
          {/* details product cấu hình sản phẩm */}
          <div className="details p-8 md:col-span-2 bg-white">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductByID;
