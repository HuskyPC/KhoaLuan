import React from "react";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const ProductLoading = () => {
  return (
    <>
      <div className=" h-[350px] bg-white  p-3 relative text-center ">
        <LoadingSkeleton width="100%" height="50%" radius="0px" />

        {/* <i className="fas fa-heart text-blue-700"></i> */}
        <div className="mt-8"></div>
        <span className="price ">
          <LoadingSkeleton width="100%" height="10%" />
        </span>

        <div className=" mt-3 h-[10%] w-1/2 m-auto">
          <LoadingSkeleton width="50%" height="100%" />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-5 px-2 h-[10%]">
          <div className="w-3/4 h-[100%] m-auto">
            <LoadingSkeleton width="50%" height="100%" />
          </div>
          <div className="w-full h-[100%] m-auto">
            <LoadingSkeleton width="100%" height="100%" radius="999px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLoading;
