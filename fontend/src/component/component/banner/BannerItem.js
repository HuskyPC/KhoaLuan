import React from "react";

const BannerItem = (props) => {
  return (
    <div
      className="banner-text-right w-full relative overflow-hidden "
      key={props.id}
    >
      <img
        className="hidden lg:block  h-full w-full"
        src={` ${props.urlImgDesktop}${props.imgDesktop}`}
        alt="hinh ảnh"
      />
      <img
        className="hidden md:block lg:hidden h-full w-full"
        src={` ${props.urlImgTablet}${props.imgTablet}`}
        alt="hinh ảnh"
      />
      <img
        className="block md:hidden h-full w-full"
        src={` ${props.urlImgMobile}${props.imgMobile}`}
        alt="hinh ảnh"
      />
      <div
        className={` absolute  ${
          props.id % 2 === 0 ? "left-24" : "right-24"
        } top-40 w-9/12 text-white ${
          props.id % 2 === 0 ? "text-left" : "text-right"
        } max-w-sm`}
      >
        <span className="hidden md:block first-letter:uppercase">
          {props.detail1}
        </span>
        <br />
        <h2 className=" text-5xl pt-6 leading-tight uppercase">
          {props.detail2}
        </h2>
        {/* xử lí khi click vào chuyển url */}
        <button className="mt-10 px-4 py-3 text-xs bg-black normal-case first-letter:uppercase">
          {props.contentUrrl}
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
