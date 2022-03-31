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
      <section className="mt-16 main ">
        {/* img and name product */}
        <div className="grid grid-cols-5 gap-3 px-20 ">
          {/* img product */}
          <div className="productImage col-span-3 relative bg-white">
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
              className="mySwiper2 h-[400px] "
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
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="hinh anh"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
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
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="hinh anh"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt="hinh anh"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* name product */}
          <div className="productContent col-span-2 bg-white p-4">
            <img
              src="../asset/img/logo/os/microsoft.webp"
              alt="hinh anh"
              className="w-20"
            />
            <h2 className="mt-6 text-3xl first-letter:uppercase">product 1</h2>
            <p className="mt-4 grid grid-rows-4 text-sm font-light">
              <span className=" capitalize">· OS windows™ 10</span>
              <span className=" capitalize">· 28 inch pixelSense™ display</span>
              <span className=" capitalize">· Intel Core i5/i7</span>
            </p>
            <span className="price text-blue-500 text-3xl">
              {numberFormat(2000000)}
            </span>
            <span className={` priceSale text-xs line-through text-red-500`}>
              {numberFormat(28000000)}
            </span>
            <div className="grid grid-cols-2 mt-5 p-4">
              <Link
                to="/"
                className=" first-letter:uppercase font-light text-white  "
              >
                <span className="bg-black rounded-full text-center p-3 hover:bg-blue-500">
                  <i className="fa-solid fa-cart-shopping "></i> Thêm vào giỏ
                  hàng
                </span>
              </Link>
              <Link
                to="/"
                className="heart text-center hover:text-blue-500 font-light "
              >
                <i className="far fa-heart "></i> Yêu thích
                {/* <i className="fas fa-heart text-blue-700"></i> */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductByID;
