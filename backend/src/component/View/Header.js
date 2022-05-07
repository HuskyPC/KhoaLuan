import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div>
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                data-widget="pushmenu"
                to="/"
                role="button"
              >
                <i className="fas fa-bars" />
              </Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="index3.html" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          {/* Right navbar links */}
        </nav>
        {/* /.navbar */}
      </div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="." className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="hinh anh"
              />
            </div>
            <div className="info">
              <Link to="/" className="d-block">
                Alexander Pierce
              </Link>
            </div>
          </div>
          {/* SidebarSearch Form */}

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    Layout Options
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="pages/layout/top-nav.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/top-nav-sidebar.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Top Navigation + Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default Header;
