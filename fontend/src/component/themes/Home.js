import React from "react";
import { Fragment } from "react";
import BannerHome from "../component/banner/BannerHome";
import BrandSuggestion from "../component/home/BrandSuggestion";
import NewProduct from "../component/home/NewProduct";
const Home = () => {
  return (
    <Fragment>
      <BannerHome />
      <BrandSuggestion />
      <NewProduct />
    </Fragment>
  );
};

export default Home;
