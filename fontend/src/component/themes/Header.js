import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/homeStyle.css";

const Header = () => {
  const [dropdown, setDropDown] = useState(false);
  //
  const [stickyHeader, setStickyHeader] = useState("relative");
  // useEffect(() => {
  //   window.addEventListener("scroll", stickNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", stickNavbar);
  //   };
  // }, []);
  // const stickNavbar = () => {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     windowHeight > 25
  //       ? setStickyHeader("fixed")
  //       : setStickyHeader("absolute");
  //   }
  // };
  // console.log(window.location.pathname);
  // let pathURL = window.location.pathname;

  const handleDropdown = () => {
    dropdown ? setDropDown(false) : setDropDown(true);
  };
  return (
    <div className="headered">
      {/* header */}
      <div
        className={`fixed top-0 z-10 w-full grid grid-cols-6 md:grid-cols-5  gap-4 bg-black-rgba text-white px-5 "`}
      >
        {/* logo and ten shop */}
        <div className="flex items-center justify-center ">
          <Link to="/">
            <img
              className="w-10  md:hidden inline-block"
              src="asset/img/logo/logo.png"
              alt="logo"
            />
          </Link>
          <Link to="/">
            <span className="md:inline-block hidden uppercase">logo</span>
          </Link>
        </div>
        {/* menu */}
        <div className="items-center justify-center md:col-span-3  md:flex ">
          <div
            className="py-2 -ml-3 cursor-pointer inline-block relative md:hidden  "
            onClick={() => handleDropdown()}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <header className="menu hidden md:flex items-center justify-center text-base font-light ">
            <Link to="/" className="py-2 px-3 uppercase">
              Home
            </Link>
            <Link to="/product" className="py-2 px-3 uppercase">
              Sản phẩm
            </Link>
            <Link to="/cart" className="py-2 px-3 uppercase">
              Cart
            </Link>
            <Link to="/contact" className="py-2 px-3 uppercase">
              Contact
            </Link>
          </header>
        </div>

        {/* cart, account */}
        <div className="item-header flex items-center justify-center  col-end-7 col-span-2 ">
          <Link className="py-2 px-2" to="/">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link className="py-2 px-2" to="/">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link className="py-2 px-2" to="/">
            <i className="fa-solid fa-heart"></i>
          </Link>
          <Link className="py-2 px-2" to="/">
            <i className="fa-solid fa-user-lock"></i>
          </Link>
        </div>
      </div>
      {/* dropdown menu */}
      <div
        className={`z-10 block md:hidden w-full h-screen bg-black-rgba-03 
        absolute top-10 transition-transform origin-left cursor-pointer
        ${dropdown ? "translate-x-[100rem] " : ""}
        -left-[100rem]`}
        onClick={() => handleDropdown()}
      >
        {/* thay đổi grid row dể menu có dạng block */}
        <div
          className="menu-dropdown w-1/2 text-[14px] grid grid-cols-1 grid-rows-4 bg-slate-700 text-white 
        font-light rounded-br pb-2 first-letter:uppercase "
        >
          <Link to="/" className="py-2 px-3 uppercase">
            Home
          </Link>
          <Link to="/product" className="py-2 px-3 uppercase">
            Sản phẩm
          </Link>
          <Link to="/cart" className="py-2 px-3 uppercase">
            Cart
          </Link>
          <Link to="/contact" className="py-2 px-3 uppercase">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
