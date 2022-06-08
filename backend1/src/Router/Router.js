import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryCreate from "../component/View/category/CategoryCreate";
import Header from "../component/View/Header";
import Home from "../component/View/Home";
import ProductaAll from "../component/View/Product/ProductaAll";
import ProductCreate from "../component/View/Product/ProductCreate";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content-wrapper p-3 ">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/create" element={<ProductCreate />} />
          <Route path="/product/all" element={<ProductaAll />} />
          <Route path="/category/create" element={<CategoryCreate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
