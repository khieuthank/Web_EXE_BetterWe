import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './general.css'

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <div>
            <header>
                {/* Header Start */}
                <div className="header-area header-transparent">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="menu-wrapper d-flex align-items-center justify-content-between">
                                {/* Logo */}
                                <div className="logo">
                                    <Link to="/home">
                                        <img className="logo-img" src="assets/img/logo/logo.jpg" alt="logo" />
                                    </Link>
                                </div>
                                {/* Main-menu */}
                                <div className={`main-menu f-right d-none d-lg-block ${isMenuOpen ? 'show' : ''}`}>
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <Link to="/home" onClick={closeMenu}>{t('header.home')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/about" onClick={closeMenu}>{t('header.about')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/bmi-calculator" onClick={closeMenu}>{t('header.BMI calculator')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/blog" onClick={closeMenu}>Blog</Link>
                                                <ul className="submenu">
                                                    <li>
                                                        <Link to="/blog/detail" onClick={closeMenu}>Blog Detail</Link>
                                                    </li>
                                                    <li>
                                                        <a href="elements.html" onClick={closeMenu}>Elements</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link to="/pricing" onClick={closeMenu}>{t('header.pricing')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact" onClick={closeMenu}>{t('header.contact')}</Link>
                                            </li>
                                            <li>
                                                <Link to="/courses" onClick={closeMenu}>{t('header.courses')}</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="d-flex">
                                    {/* Language Switcher */}
                                    <div className="language-switcher">
                                        <select onChange={(e) => changeLanguage(e.target.value)}>
                                            <option value="en">EN</option>
                                            <option value="vn">VN</option>
                                        </select>
                                    </div>


                                    {/* Mobile Menu */}
                                    <div className="d-lg-none">
                                        <div className="mobile-menu-icon" onClick={toggleMenu}>
                                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                                        </div>
                                        <div className={`mobile_menu ${isMenuOpen ? 'show' : ''}`}>
                                            <nav>
                                                <ul id="mobile-menu-ul">
                                                    <li>
                                                        <Link to="/home" onClick={closeMenu}>{t('header.home')}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/about" onClick={closeMenu}>{t('header.about')}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/bmi-calculator" onClick={closeMenu}>{t('header.BMI calculator')}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/blog" onClick={closeMenu}>Blog</Link>
                                                        <ul className="submenu">
                                                            <li>
                                                                <Link to="/blog/detail" onClick={closeMenu}>Blog Detail</Link>
                                                            </li>
                                                            <li>
                                                                <a href="elements.html" onClick={closeMenu}>Elements</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to="/pricing" onClick={closeMenu}>{t('header.pricing')}</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contact" onClick={closeMenu}>{t('header.contact')}</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
        </div>
    );
};

export default Header;
