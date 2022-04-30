import React, { useEffect, useState } from "react";
import BrandFakeData from "../data/BrandFakeData";
import { Link, useParams } from "react-router-dom";
import BrandApi from "../api/BrandAPI";
import CategoryAPI from "../api/CategoryAPI";
const ItemTag = (props) => {
  let { id } = useParams();

  return (
    <Link
      to={`/product/${props.id}`}
      className={`border-[1px]  px-2 py-1 ${
        id === props.id ? "bg-gray-200 border-gray-300" : "border-gray-200"
      } 
       hover:bg-gray-200 hover:border-gray-300`}
    >
      {props.name}
    </Link>
  );
};
const TypeLaptop = (props) => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="loaiLaptop"
          id="loaiLaptop"
        />
        <label
          className="form-check-label inline-block text-sm text-[#777] font-light first-letter:uppercase"
          htmlFor="flexCheckDefault"
        >
          {props.name}
        </label>
      </div>
    </>
  );
};

const Product = () => {
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await BrandApi.getBrandSuggestion();
        setBrand(response.data);
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
  }, []);
  const [...dataFake] = BrandFakeData;

  return (
    <>
      <div className="product-tag h-40 bg-white grid grid-rows-2 ">
        <div className="h-1/2"></div>
        <div className="tag flex items-center justify-center pb-10">
          <div className="tag-content">
            <span className=" font-light text-xs">Tìm kiếm theo:</span>
            <div className="grid grid-cols-9  text-center font-light text-xs">
              <ItemTag id={"all"} name={"Tất cả thương hiệu"}></ItemTag>

              {brand.length > 0 &&
                brand.map((item, index) => (
                  <ItemTag
                    key={item.brandID}
                    id={item.brandID}
                    name={item.name}
                  ></ItemTag>
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
              <span className=" float-right text-xs text-blue-500 mt-2">
                <i className="fa-solid fa-trash-can "></i> Xóa đã chọn
              </span>
              <div className="checkbox-type-filter p-2 mt-3">
                {category.length > 0 &&
                  category.map((item, index) => (
                    <TypeLaptop
                      key={item.categoryID}
                      id={item.categoryID}
                      name={item.name}
                    ></TypeLaptop>
                  ))}
              </div>
            </div>
            <hr />
            <div className="item-type-filter mt-6">
              <span className="text-xl font-light">Màng hình</span>
              <span className=" float-right text-xs text-blue-500 mt-2">
                <i className="fa-solid fa-trash-can "></i> Xóa đã chọn
              </span>
              <div className="checkbox-type-filter p-2 mt-3 grid grid-cols-2">
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="mangHinh"
                    id="loaiLaptop"
                  />
                  <label
                    className="form-check-label inline-block text-sm text-[#777] font-light"
                    htmlFor="flexCheckDefault"
                  >
                    13 in
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="mangHinh"
                    id="loaiLaptop"
                  />
                  <label
                    className="form-check-label inline-block text-sm text-[#777] font-light"
                    htmlFor="flexCheckDefault"
                  >
                    13 in
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="mangHinh"
                    id="loaiLaptop"
                  />
                  <label
                    className="form-check-label inline-block text-sm text-[#777] font-light"
                    htmlFor="flexCheckDefault"
                  >
                    13 in
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="mangHinh"
                    id="loaiLaptop"
                  />
                  <label
                    className="form-check-label inline-block text-sm text-[#777] font-light"
                    htmlFor="flexCheckDefault"
                  >
                    13 in
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-item col-span-7">vjfksk</div>
      </div>
    </>
  );
};

export default Product;
