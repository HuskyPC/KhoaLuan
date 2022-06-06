import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import BrandApi from "../api/BrandAPI";
import CategoryAPI from "../api/CategoryAPI";
import Mapping from "../api/Mapping";
import ProductApi from "../api/ProductAPI";
import ProductItem from "../component/product/ProductItem";

const Product = () => {
  const [brandSuggestion, setBrandSuggestion] = useState("");

  const [category, setCategory] = useState("");
  const [mappProtoCate, setMappProtoCate] = useState("");
  const [product, setProduct] = useState("");
  const [brand, setBrand] = useState("");
  console.log("🚀 ~ file: Product.js ~ line 16 ~ Product ~ brand", brand);
  const [searchParams, setSearchParams] = useSearchParams();

  let { id } = useParams();
  console.log("🚀 ~ file: Product.js ~ line 20 ~ Product ~ id", id);
  useEffect(() => {
    (async () => {
      try {
        const response = await BrandApi.getBrandSuggestion();
        setBrandSuggestion(response.data);
      } catch (error) {
        console.log(error.message);
      }
    })();
    (async () => {
      const respone = await CategoryAPI.getCategory();
      if (respone.data) {
        setCategory(respone.data);
      }
    })();
    (async () => {
      const respone = await Mapping.getAllMapProtoCate();
      if (respone.data) {
        setMappProtoCate(respone.data);
      }
    })();
    (async () => {
      const respone = await ProductApi.getAllProduct();
      if (respone.data) {
        setProduct(respone.data);
      }
    })();
    (async () => {
      const respone = await BrandApi.getAllBrand();
      if (respone.data) {
        setBrand(respone.data);
      }
    })();
  }, []);

  return (
    <>
      <div className="product-tag h-40 bg-white grid grid-rows-2 ">
        <div className="h-1/2"></div>
        <div className="tag flex items-center justify-center pb-10">
          <div className="tag-content">
            <span className=" font-light text-xs">Tìm kiếm theo:</span>
            <div className="grid grid-cols-9  text-center font-light text-xs">
              {/* <ItemTag id={"all"} name={"Tất cả thương hiệu"}></ItemTag> */}
              <Link
                to={`/product/all`}
                className={`border-[1px]  px-2 py-1 ${
                  id === "all"
                    ? "bg-gray-200 border-gray-300"
                    : "border-gray-200"
                } 
                 hover:bg-gray-200 hover:border-gray-300`}
              >
                Tất cả thương hiệu
              </Link>

              {brandSuggestion.length > 0 &&
                brandSuggestion.map((item, index) => (
                  <Link
                    key={item.brandID}
                    to={`/product/${item.brandID}`}
                    className={`border-[1px]  px-2 py-1 ${
                      id === item.brandID
                        ? "bg-gray-200 border-gray-300"
                        : "border-gray-200"
                    } 
                    hover:bg-gray-200 hover:border-gray-300`}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 mt-10 grid grid-cols-9 gap-6">
        <div className="filter col-span-2">
          <div className="type-filter block p-4 bg-[#f7f7f7] shadow-[0px_4px_2px_rgb(31_31_31_/_2%)]">
            <div className="item-type-filter">
              <span className="text-xl font-light">Loại laptop</span>
              <span
                className=" float-right text-xs text-blue-500 mt-2"
                onClick={() => setSearchParams({})}
              >
                <i className="fa-solid fa-trash-can "></i> Xóa đã chọn
              </span>
              <div className="checkbox-type-filter p-2 mt-3">
                {category.length > 0 &&
                  category.map((item, index) => (
                    <div className="form-check" key={item.categoryID}>
                      <input
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="radio"
                        name="loaiLaptop"
                        id={`${item.categoryID}`}
                        onClick={() =>
                          setSearchParams({ cate: item.categoryID })
                        }
                      />
                      <label
                        className="form-check-label inline-block text-sm text-[#777] font-light first-letter:uppercase"
                        htmlFor={`${item.categoryID}`}
                      >
                        {item.name}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="product-item col-span-7">
          <div className="w-full grid  grid-cols-4 gap-3">
            {id === `all`
              ? searchParams.get("cate") === null
                ? product.length > 0 &&
                  product.map((item, index) => (
                    <ProductItem
                      key={item.productID}
                      id={item.productID}
                      name={item.name}
                      price={item.price}
                      priceSale={item.priceSale}
                      url={`/detail/${item.productID}`}
                      img={item.avatar}
                      urlImg={"../" + item.urlImage}
                    ></ProductItem>
                  ))
                : category.map((itemCate, indexCate) =>
                    product.map((itemPro, indexPro) =>
                      mappProtoCate.map((itemMap, indexMap) =>
                        itemCate.categoryID === searchParams.get("cate") &&
                        itemCate.categoryID === itemMap.categoryID &&
                        itemMap.productID === itemPro.productID ? (
                          <ProductItem
                            key={itemPro.productID}
                            id={itemPro.productID}
                            name={itemPro.name}
                            price={itemPro.price}
                            priceSale={itemPro.priceSale}
                            url={`/detail/${itemPro.productID}`}
                            img={itemPro.avatar}
                            urlImg={"../" + itemPro.urlImage}
                          ></ProductItem>
                        ) : (
                          ""
                        )
                      )
                    )
                  )
              : searchParams.get("cate") === null
              ? brand.length > 0 &&
                brand.map((itemBrand0, indexBrand0) =>
                  itemBrand0.parentID === "0"
                    ? brand.map((itemBrand1, indexBrand1) =>
                        itemBrand0.brandID === itemBrand1.parentID
                          ? category.length > 0 &&
                            category.map(
                              (itemCate, indexCate) =>
                                product.length > 0 &&
                                product.map(
                                  (itemPro, indexPro) =>
                                    mappProtoCate.length > 0 &&
                                    mappProtoCate.map((itemMap, indexMap) =>
                                      id === itemBrand0.brandID &&
                                      itemPro.brandID === itemBrand1.brandID &&
                                      itemCate.categoryID ===
                                        itemMap.categoryID &&
                                      itemMap.productID ===
                                        itemPro.productID ? (
                                        <ProductItem
                                          key={itemPro.productID}
                                          id={itemPro.productID}
                                          name={itemPro.name}
                                          price={itemPro.price}
                                          priceSale={itemPro.priceSale}
                                          url={`/detail/${itemPro.productID}`}
                                          img={itemPro.avatar}
                                          urlImg={"../" + itemPro.urlImage}
                                        ></ProductItem>
                                      ) : (
                                        ""
                                      )
                                    )
                                )
                            )
                          : ""
                      )
                    : ""
                )
              : brand.length > 0 &&
                brand.map((itemBrand0, indexBrand0) =>
                  itemBrand0.parentID === "0"
                    ? brand.map((itemBrand1, indexBrand1) =>
                        itemBrand0.brandID === itemBrand1.parentID
                          ? category.length > 0 &&
                            category.map(
                              (itemCate, indexCate) =>
                                product.length > 0 &&
                                product.map(
                                  (itemPro, indexPro) =>
                                    mappProtoCate.length > 0 &&
                                    mappProtoCate.map((itemMap, indexMap) =>
                                      searchParams.get("cate") ===
                                        itemCate.categoryID &&
                                      id === itemBrand0.brandID &&
                                      itemPro.brandID === itemBrand1.brandID &&
                                      itemCate.categoryID ===
                                        itemMap.categoryID &&
                                      itemMap.productID ===
                                        itemPro.productID ? (
                                        <ProductItem
                                          key={itemPro.productID}
                                          id={itemPro.productID}
                                          name={itemPro.name}
                                          price={itemPro.price}
                                          priceSale={itemPro.priceSale}
                                          url={`/detail/${itemPro.productID}`}
                                          img={itemPro.avatar}
                                          urlImg={"../" + itemPro.urlImage}
                                        ></ProductItem>
                                      ) : (
                                        ""
                                      )
                                    )
                                )
                            )
                          : ""
                      )
                    : ""
                )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
