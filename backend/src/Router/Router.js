import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../component/View/Header";
import Home from "../component/View/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <div class="content-wrapper p-3 ">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
