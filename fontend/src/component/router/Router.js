import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../component/user/Login";
import Cart from "../themes/Cart";
import Header from "../themes/Header";

import Home from "../themes/Home";
import Product from "../themes/Product";
import ProductByID from "../themes/ProductByID";
import Search from "../themes/Search";
const Routers = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductByID />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
