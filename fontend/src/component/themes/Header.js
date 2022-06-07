import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/homeStyle.css";
import { toast } from "react-toastify";
import HeaderApi from "../api/HeaderAPI";

const Header = () => {
  let isUserLocal = JSON.parse(localStorage.getItem("user"));
  let isUserSEC = JSON.parse(sessionStorage.getItem("user"));

  const [UserID, setUser] = useState();
  if (UserID === undefined) {
    if (isUserLocal !== null) setUser(isUserLocal);
    else if (isUserSEC !== null) setUser(isUserSEC);
  }

  const [cartCount, setCartCout] = useState(0);

  const [dropdown, setDropDown] = useState(false);
  const [dropdownUser, setDropDownUser] = useState(true);

  const handleLoginOut = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    localStorage.removeItem("avatar");
    sessionStorage.removeItem("avatar");
    localStorage.removeItem("userName");
    sessionStorage.removeItem("userName");
    localStorage.removeItem("cart");
    sessionStorage.removeItem("cart");

    setDropDownUser(!dropdownUser);
    setCartCout(0);
    setUser();
    if (UserID !== undefined) {
      toast.success("Đăng xuất thành công", {
        className: "top-10",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      window.location.reload();
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
  useEffect(() => {
    (async () => {
      if (UserID !== undefined) {
        try {
          const response = await HeaderApi.getCountCart(UserID);
          setCartCout(response.data);
        } catch (error) {
          console.log(error.message);
        }
      } else setCartCout(0);
    })();
  }, [UserID, cartCount]);

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
        absolute top-12 transition-transform origin-left cursor-pointer
        ${dropdown ? "translate-x-[100rem]" : ""}
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
            <Link to="/" className="p-3 uppercase">
              Home
            </Link>
            <Link to="/product/all" className="p-3 uppercase">
              Sản phẩm
            </Link>
            <Link to="/cart" className="p-3 uppercase ">
              Cart
            </Link>
            <Link to="/contact" className="p-3 uppercase">
              Contact
            </Link>
          </header>
        </div>

        {/* cart, account */}
        <div className="item-header flex items-center justify-center  col-end-7 col-span-2 ">
          <Link className="p-3" to="/search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>

          <Link className="p-3 relative" to="/cart">
            <i className="fa-solid fa-cart-shopping "></i>
            {cartCount > 0 ? (
              <span className="text-xs absolute top-2 right-0 rounded-full bg-blue-500 w-[16px] h-[16px] text-center">
                {cartCount}
              </span>
            ) : (
              ""
            )}
          </Link>

          <Link className="p-3" to="/favorite">
            <i className="fa-solid fa-heart"></i>
          </Link>
          <div
            className={`${
              UserID ? "cursor-pointer " : "hover:bg-white hover:text-black p-3"
            } relative  `}
            onClick={handeleDropdownUser}
          >
            {UserID ? (
              <img
                src="asset/img/account/defaultAccountImg.png"
                alt="hinh anh"
                className=" w-10 rounded-full  "
              />
            ) : (
              <i className="fa-solid fa-user-lock"></i>
            )}
            {/*  */}
          </div>

          <div className={`${dropdownUser ? "hidden" : ""}`}>
            <div className="dropdownAccount absolute top-12 right-0  gap-2 max-w-[200px] min-w-[150px] bg-slate-700 ">
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
              {UserID !== undefined ? (
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
