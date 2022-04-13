import React, { useEffect, useState } from "react";
import ProductApi from "../../api/ProductAPI";
import ProductFakeData from "../../data/ProductFakeData";
import ProductItem from "../product/ProductItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Link } from "react-router-dom";

const LoadProductByBrand = (props) => {
  const [...dataFake] = ProductFakeData;
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await ProductApi.getLoadProductByBrandTopX(
          5,
          props.nameBrand
        );
        setProductData(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    })();
  }, [props.nameBrand]);
  return (
    <div>
      <div className="new-product pt-8 ">
        <span className="uppercase block p-4 text-xl tracking-widest text-center relative">
          {props.nameBrand}
          <Link
            to={`product/${props.brandID}`}
            className="absolute top-16 right-20 text-base normal-case tracking-normal cursor-pointer text-blue-500"
          >
            Xem toàn bộ &#62;&#62;
          </Link>
        </span>
        <div className="product-list px-20 mt-10">
          <Swiper grabCursor={"true"} spaceBetween={10} slidesPerView={"auto"}>
            {productData.length > 0
              ? productData.map((item, index) => (
                  <SwiperSlide key={item.productID}>
                    <ProductItem
                      id={item.productID}
                      name={item.name}
                      price={item.price}
                      priceSale={item.priceSale}
                      url={`/detail/${item.productID}`}
                      img={item.avatar}
                      urlImg={item.urlImage}
                    ></ProductItem>
                  </SwiperSlide>
                ))
              : dataFake.length > 0 &&
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
    </div>
  );
};

export default LoadProductByBrand;
