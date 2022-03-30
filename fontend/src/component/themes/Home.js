import React from "react";
import { Fragment } from "react";
import BannerHome from "../component/banner/BannerHome";
import BrandSuggestion from "../component/home/BrandSuggestion";
const Home = () => {
  return (
    <Fragment>
      <BannerHome />
      <BrandSuggestion />
    </Fragment>
  );
};

export default Home;
