// src/App.js

import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./page/home/Home";
import Pricing from "./page/pricing/Pricing";
import Header from "./compoment/general/Header.jsx";
import Footer from "./compoment/general/Footer.jsx";
import About from "./page/aboutme/About";
import Blog from "./page/blog/Blog";
import BlogDetail from "./page/blog/BlogDetail";
import Contact from "./page/contact/Contact";
import BmiCalculator from "./compoment/general/BmiCalculator.jsx";

import './translations/i18n/i18n.js';
import ScrollToTop from "./compoment/ScrollToTop/ScrollToTop.js";

function App() {
  return (
    <div>
      <BrowserRouter>

      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog">
            <Route index element={<Blog />}></Route>
            <Route path="detail" element={<BlogDetail />}></Route>
          </Route>
          <Route path="/bmi-calculator" element={<BmiCalculator />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
