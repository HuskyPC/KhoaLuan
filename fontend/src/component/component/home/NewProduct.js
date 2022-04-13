import React, { useEffect, useState } from "react";
import ProductFakeData from "../../data/ProductFakeData";
import ProductItem from "../product/ProductItem";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import ProductApi from "../../api/ProductAPI";

const NewProduct = () => {
  const [...dataFake] = ProductFakeData;
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(5);

  useEffect(() => {
    (async () => {
      try {
        const response = await ProductApi.getLoadBrandTopX(filters);
        setProductData(response.data);
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
    <div className="new-product pt-8 ">
      <span className="uppercase block p-4 text-xl tracking-widest text-center">
        Sản phẩm mới
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
  );
};

export default NewProduct;
