import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "../component/user/Edit";
import LoginTab from "../component/user/LoginTab";
import Notification from "../component/user/Notification";
import RegisterTab from "../component/user/RegisterTab";
import Cart from "../themes/Cart";
import Contact from "../themes/Contact";
import Favorite from "../themes/Favorite";
import Footer from "../themes/Footer";
import Header from "../themes/Header";

import Home from "../themes/Home";
import Order from "../themes/Order";
import Product from "../themes/Product";
import ProductByID from "../themes/ProductByID";
import Search from "../themes/Search";
import User from "../themes/User";
import RoutertUser from "./RoutertUser";
const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Product />} />
        <Route path="/detail/" element={<Product />} />
        <Route path="/detail/:id" element={<ProductByID />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/" element={<Search />} />
        {/* <Route path="/product" element={<Product />} />
        <Route path="/product/" element={<Product />} /> */}
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/favorite/" element={<Favorite />} />
        <Route path="/login" element={<LoginTab />} />
        <Route path="/register" element={<RegisterTab />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="user" element={<RoutertUser />}>
          <Route path="Thong-tin-tai-khoang" element={<Edit />} />
          <Route path="Quan-li-don-hang/:id" element={<Order />} />
          <Route path="Quan-li-don-hang" element={<Notification />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routers;
