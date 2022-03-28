import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../themes/Header";

import Home from "../themes/Home";
import ProductByID from "../themes/ProductByID";
const Routers = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductByID />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
