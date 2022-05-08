import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../component/View/Header";
import Home from "../component/View/Home";
import ProductCreate from "../component/View/Product/ProductCreate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="content-wrapper p-3">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/create" element={<ProductCreate />} />
        </Routes>
      </div>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
};

export default Router;
