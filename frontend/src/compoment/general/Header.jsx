import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>

      <header>
        {/* <!-- Header Start --> */}
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="menu-wrapper d-flex align-items-center justify-content-between">
                {/* <!-- Logo --> */}
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo.png" alt="" />
                  </a>
                </div>
                {/* <!-- Main-menu --> */}
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      <li>
                        <Link to="/blog">Blog</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/blog-detail">Blog Detail</Link>
                          </li>

                          <li>
                            <a href="elements.html">Elements</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/pricing">Pricing</Link>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <!-- Header-btn --> */}
                <div className="header-btns d-none d-lg-block f-right">
                  <a href="contact.html" className="btn">
                    Contact me
                  </a>
                </div>
                {/* <!-- Mobile Menu --> */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header End --> */}
      </header>
    </div>
  );
};

export default Header;
