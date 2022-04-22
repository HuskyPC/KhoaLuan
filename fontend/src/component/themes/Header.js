import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/homeStyle.css";
// import Login from "../component/user/Login";
// import Register from "../component/user/Register";
import { useContextWEB } from "../context/ContextComponent";
import { toast } from "react-toastify";
import HeaderApi from "../api/HeaderAPI";

const Header = () => {
  let isUserLocal = JSON.parse(localStorage.getItem("user"));

  let isUserSEC = JSON.parse(sessionStorage.getItem("user"));

  const [cartCount, setCartCout] = useState("");

  const [dropdown, setDropDown] = useState(false);
  const [dropdownUser, setDropDownUser] = useState(true);
  // const [dropdownLogin, setDropdownLogin] = useState(false);
  // const [dropdownRegister, setDropdownRegister] = useState(false);

  // const handleDropdownLogin = () => {
  //   setDropdownLogin(!dropdownLogin);
  //   // setDropDownUser(!dropdownUser);
  // };
  // const handleDropdownRegister = () => {
  //   setDropdownRegister(!dropdownRegister);
  //   // setDropDownUser(!dropdownUser);
  // };
  const handleLoginOut = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setDropDownUser(!dropdownUser);
    if (isUserLocal === null || isUserSEC === null) {
      toast.success("Đăng xuất thành công", {
        className: "top-10",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else {
      toast.error("Đăng xuất không thành công", {
        className: "top-10",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };
  const handleDropdown = () => {
    setDropDown(!dropdown);
  };
  const handeleDropdownUser = () => {
    setDropDownUser(!dropdownUser);
  };
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await HeaderApi.getCountCart(isUserSEC);
  //       setCartCout(response.data);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  // }, []);

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
              <Link to="/product/all" className="py-2 px-3 uppercase">
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
          <header className="menu hidden md:flex items-center justify-center text-base font-light ">
            <Link to="/" className="py-2 px-3 uppercase">
              Home
            </Link>
            <Link to="/product/all" className="py-2 px-3 uppercase">
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
          <Link className="py-2 px-2" to="/search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link className="py-2 px-2" to="/">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link className="py-2 px-2" to="/favorite">
            <i className="fa-solid fa-heart"></i>
          </Link>
          <div
            className="py-2 px-2 relative hover:bg-white hover:text-black"
            onClick={handeleDropdownUser}
          >
            <i className="fa-solid fa-user-lock"></i>
          </div>

          <div className={`${dropdownUser ? "hidden" : ""}`}>
            <div className="dropdownAccount absolute top-10 left-[85%]  gap-2 w-full bg-slate-700 ">
              {/* <span
                  className="cursor-pointer hover:bg-white hover:text-black block px-4 py-2"
                  onClick={handleDropdownLogin}
                >
                  Đăng nhập
                </span>
                <span
                  className="cursor-pointer hover:bg-white hover:text-black block px-4 py-2"
                  onClick={handleDropdownRegister}
                >
                  Đăng ký
                </span> */}
              {isUserLocal !== null || isUserSEC !== null ? (
                <>
                  <Link
                    to="/"
                    className="cursor-pointer hover:bg-white hover:text-black block px-4 py-2"
                    onClick={handeleDropdownUser}
                  >
                    Tài khoảng của tôi
                  </Link>
                  <span
                    type="submit"
                    className="cursor-pointer hover:bg-white hover:text-black block px-4 py-2"
                    onClick={handleLoginOut}
                  >
                    Đăng xuất
                  </span>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="cursor-pointer hover:bg-white hover:text-black block px-4 py-2"
                    onClick={handeleDropdownUser}
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/register"
                    className="cursor-pointer hover:bg-white hover:text-black block px-4 py-2"
                    onClick={handeleDropdownUser}
                  >
                    Đăng ký
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* <Login
            open={dropdownLogin}
            hadleClose={() => {
              setDropdownLogin();
            }}
          ></Login>
          <Register
            open={dropdownRegister}
            handleClose={() => {
              setDropdownRegister();
            }}
          ></Register> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
