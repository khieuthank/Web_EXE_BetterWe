import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './general.css'

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

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
                                        <img src="assets/img/logo/logo.png" alt="logo" />
                                    </a>
                                </div>
                                {/* <!-- Main-menu --> */}
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <Link to="/home">{t('header.home')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">{t('header.about')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/bmi-calculator">{t('header.BMI calculator')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog">Blog</Link>
                                                <ul className="submenu">
                                                    <li>
                                                        <Link to="/blog/detail">Blog Detail</Link>
                                                    </li>
                                                    <li>
                                                        <a href="elements.html">Elements</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/pricing">{t('header.pricing')}</Link>
                                            </li>
                                            <li>
                                                <a href="contact.html">{t('header.contact')}</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* <!-- Language Switcher --> */}
                                <div className="language-switcher">
                                    <button onClick={() => changeLanguage('en')}>EN</button>
                                    <button onClick={() => changeLanguage('vn')}>VN</button>
                                </div>
                                {/* <!-- Header-btn --> */}
                                <div className="header-btns d-none d-lg-block f-right">
                                    <a href="contact.html" className="btn">
                                        {t('header.contact')}
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
