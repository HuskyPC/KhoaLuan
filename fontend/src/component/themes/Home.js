import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import BrandApi from "../api/BrandAPI";
import BannerHome from "../component/banner/BannerHome";
import BrandSuggestion from "../component/home/BrandSuggestion";
import LoadProductByBrand from "../component/home/LoadProductByBrand";
import NewProduct from "../component/home/NewProduct";
const Home = () => {
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await BrandApi.getBrandIDandParentID();
        setBrandData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <Fragment>
      <BannerHome />
      <BrandSuggestion />
      <NewProduct />
      {brandData.length > 0 &&
        brandData.map((item, index) => (
          <LoadProductByBrand
            key={item.brandID}
            nameBrand={item.name}
            brandID={item.brandID}
            objProduct={item.productBo}
          ></LoadProductByBrand>
        ))}
    </Fragment>
  );
};

export default Home;
