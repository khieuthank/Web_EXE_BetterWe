
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Pricing from './page/pricing/Pricing';
import Header from "./compoment/general/Header";
import Footer from "./compoment/general/Footer";
import { Navigate } from "react-router-dom";
import About from "./page/aboutme/About";
import Blog from "./page/blog/Blog";
import BlogDetail from "./page/blog/BlogDetail";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/blog-detail" element={<BlogDetail></BlogDetail>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
