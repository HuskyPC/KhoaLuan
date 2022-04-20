import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import BannerFakeData from "../../data/BannerFakeData";
import BannerItem from "./BannerItem";
// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerApi from "../../api/BannerAPI";
import BannerFakeData from "../../data/BannerFakeData";

const BannerHome = () => {
  const [...dataTestBanner] = BannerFakeData;
  // const [...dataTestBanner] = BannerAPI();
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(5);

  useEffect(() => {
    (async () => {
      try {
        const response = await BannerApi.getBanerAll();
        setBannerData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    })();
  }, [filters]);

  // nếu bạn muốn tìm kiếm thì hãy gọi hàm này để thay đổi fillter
  const filterChange = (newFilters) => {
    setLoading(true);
    setFilters(newFilters);
  };

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
          {bannerData.length > 0
            ? bannerData.map((item, index) => (
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
              ))
            : dataTestBanner.length > 0 &&
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
