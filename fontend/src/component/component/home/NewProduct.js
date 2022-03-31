import React from "react";
import ProductFakeData from "../../data/ProductFakeData";
import ProductItem from "../product/ProductItem";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const NewProduct = () => {
  const [...dataFake] = ProductFakeData;
  //   console.log(
  //     "🚀 ~ file: NewProduct.js ~ line 8 ~ NewProduct ~ dataFake",
  //     dataFake
  //   );
  return (
    <div className="new-product pt-8 ">
      <span className="uppercase block p-4 text-xl tracking-widest text-center">
        Sản phẩm mới
      </span>
      <div className="product-list px-20 mt-10">
        <Swiper grabCursor={"true"} spaceBetween={10} slidesPerView={"auto"}>
          {dataFake.length > 0 &&
            dataFake.map((item, index) => (
              <SwiperSlide key={item.id}>
                <ProductItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  priceSale={item.priceSale}
                  url={item.url}
                  img={item.img}
                  urlImg={item.urlImage}
                ></ProductItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewProduct;
