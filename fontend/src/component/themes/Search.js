import React, { useEffect, useState } from "react";
import ProductItem from "../component/product/ProductItem";
import ProductFakeData from "../data/ProductFakeData";
import useDebounce from "../hook/useDebounce";
import ProductLoading from "../component/product/ProductLoading";
import SearchAPI from "../api/SearchAPI";
import axios from "axios";
import NewProduct from "../component/home/NewProduct";
const Search = () => {
  const [product, setProduct] = useState("");
  const [...dataFake] = ProductFakeData;
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 1000);
  const [loading, setLoading] = useState(true);
  //   https://localhost:44379/api/Search/getBrandAll?keySreach=${queryDebounce}
  useEffect(() => {
    async function fechData() {
      if (queryDebounce.length !== 0) {
        setLoading(true);
        const reposeData = await SearchAPI.getSearchProduct(queryDebounce);
        // const reposeData = await axios.get(
        //   `https://localhost:44379/api/Search/getBrandAll?keySreach=${queryDebounce}`
        // );
        if (reposeData.data) {
          setProduct(reposeData.data);
          setLoading(false);
        }
      }
    }

    fechData();
  }, [queryDebounce]);

  console.log("🚀 ~ file: Search.js ~ line 11 ~ Search ~ product", product);
  // kêt nôi csdl
  //   cơ sở dữ liệu giả

  return (
    <>
      <div className=" p-10 mt-14">
        <div className="w-full max-w-[500px] mx-auto">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full p-2 rounded-lg outline-none border-[1px] border-blue-200 shadow-[0_0_0_3px_rgba(104,_123,_255,_0.1)]"
            placeholder="Tìm kiếm..."
            onChange={(e) => setQuery(e.target.value) && setProduct("")}
          />
        </div>
        {queryDebounce === "" ? (
          <div className="w-full mt-10 text-gray-600 text-center text-2xl">
            Nhập nội dung để tìm kiếm...
          </div>
        ) : (
          <>
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-20 py-6 mt-10">
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
            {product.length <= 0 && loading !== true ? (
              <>
                <div className="w-full mt-10 text-gray-600 text-center text-2xl">
                  Không tìm thấy sản phẩm nào tên là: <strong>{query}</strong>
                </div>
                <NewProduct name="sản phẩm gợi ý"></NewProduct>
              </>
            ) : (
              <div className="w-full px-20 mt-10 grid  grid-cols-4 gap-3">
                {product.length > 0
                  ? product.map((item, index) => (
                      <ProductItem
                        key={item.productID}
                        id={item.productID}
                        name={item.name}
                        price={item.price}
                        priceSale={item.priceSale}
                        url={`/detail/${item.productID}`}
                        img={item.avatar}
                        urlImg={item.urlImage}
                      ></ProductItem>
                    ))
                  : ""}
              </div>
            )}
            <NewProduct name="sản phẩm gợi ý" />
          </>
        )}
      </div>
    </>
  );
};

export default Search;
