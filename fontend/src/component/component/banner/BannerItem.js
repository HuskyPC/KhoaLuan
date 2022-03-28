import React from "react";

const BannerItem = (props) => {
  return (
    <div
      className="banner-text-right w-full relative overflow-hidden "
      key={props.id}
    >
      <img
        className="hidden lg:block  h-screen w-full"
        src={props.imgDesktop}
        alt="hinh ảnh"
      />
      <img
        className="hidden md:block lg:hidden h-screen w-full"
        src={props.imgTablet}
        alt="hinh ảnh"
      />
      <img
        className="block md:hidden h-screen w-full"
        src={props.imgMobile}
        alt="hinh ảnh"
      />
      <div
        className={` absolute  ${
          props.id % 2 === 0 ? "left-24" : "right-24"
        } top-32 w-9/12 text-white ${
          props.id % 2 === 0 ? "text-left" : "text-right"
        } max-w-sm`}
      >
        <span className="hidden md:block ">{props.detail1}</span>
        <br />
        <h2 className=" text-5xl pt-6 leading-tight">{props.detail2}</h2>
        {/* xử lí khi click vào chuyển url */}
        <button className="mt-10 px-4 py-3 text-xs bg-black">
          {props.contentUrrl}
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
