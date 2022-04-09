import React from "react";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import BannerFakeData from "../../data/BannerFakeData";
import BannerItem from "./BannerItem";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerAPI from "../../api/banner/BannerAPI";

const BannerHome = () => {
  // const [...dataTestBanner] = BannerFakeData;
  const [...dataTestBanner] = BannerAPI();
  return (
    <Fragment>
      {/* <BannerAPI></BannerAPI> */}
      <section className=" banner  bg-black ">
        <Swiper
          pacebetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {dataTestBanner.length > 0 &&
            dataTestBanner.map((item, index) => (
              <SwiperSlide key={item.id}>
                <BannerItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imgDesktop={item.imgDesktop}
                  urlImgDesktop={item.urlImgDesktop}
                  imgTablet={item.imgTablet || item.imgDesktop}
                  urlImgTablet={item.urlImgTablet || item.urlImgDesktop}
                  imgMobile={item.imgMobile || item.imgDesktop}
                  urlImgMobile={item.urlImgMobile || item.urlImgDesktop}
                  url={item.url}
                  contentUrrl={item.contentUrrl}
                  detail1={item.detail1}
                  detail2={item.detail2}
                ></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </Fragment>
  );
};

export default BannerHome;
