import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../component/product/ProductItem";
import ProductFakeData from "../data/ProductFakeData";
import useDebounce from "../hook/useDebounce";
import LoadingSkeleton from "../component/loading/LoadingSkeleton";
import ProductLoading from "../component/product/ProductLoading";
const Search = () => {
  const [product, setProduct] = useState("");
  const [...dataFake] = ProductFakeData;
  const [query, setQuery] = useState("");
  const queryBebounce = useDebounce(query, 750);
  const [loading, setLoading] = useState(true);
  //   https://localhost:44379/Home/getProduct?SL=`${query}`
  useEffect(() => {
    async function fechData() {
      setLoading(true);
      const reposeData = await axios.get(
        `https://localhost:44379/Home/getProduct?SL=${queryBebounce}2`
      );
      if (reposeData.data) {
        setProduct(reposeData.data);
        setLoading(false);
      }
    }
    fechData();
  }, [queryBebounce]);
  // kêt nôi csdl
  //   cơ sở dữ liệu giả

  return (
    <>
      <div className=" p-10 mt-14">
        <div className="w-full max-w-[500px] mx-auto">
          <input
            type="text"
            name="srearch"
            className="w-full p-2 rounded-lg outline-none border-[1px] border-blue-200 shadow-[0_0_0_3px_rgba(104,_123,_255,_0.1)]"
            placeholder="Tìm kiếm..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {queryBebounce === "" ? (
          <div className="w-full mt-10 text-gray-600 text-center text-2xl">
            Nhập nội dung để tìm kiếm...
          </div>
        ) : (
          <>
            {loading && (
              <div className="grid grid-cols-4 gap-3 px-20 py-6 mt-10">
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
                <ProductLoading />
              </div>
            )}
            <div className="w-full px-20 mt-10 grid  grid-cols-4 gap-3">
              {product.length > 0
                ? product.map((item, index) => (
                    <ProductItem key={item.productID} />
                  ))
                : dataFake.map((item, index) => (
                    <ProductItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      priceSale={item.priceSale}
                      url={item.url}
                      img={item.img}
                      urlImg={item.urlImage}
                    ></ProductItem>
                  ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
