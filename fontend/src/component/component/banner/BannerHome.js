import React from "react";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerFakeData from "../../data/BannerFakeData";
import BannerItem from "./BannerItem";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
// import { Link } from "react-router-dom";
const BannerHome = () => {
  const [...dataTestBanner] = BannerFakeData;

  return (
    <Fragment>
      <section className=" banner  bg-black">
        <Swiper
          paceBetween={30}
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
          {dataTestBanner.map((item, index) => (
            <SwiperSlide>
              <BannerItem
                key={item.id}
                id={item.id}
                name={item.name}
                imgDesktop={item.imgDesktop}
                imgTablet={item.imgTablet}
                imgMobile={item.imgMobile}
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
