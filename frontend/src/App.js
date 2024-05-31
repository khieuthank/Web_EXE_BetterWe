import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/home/Home';
import { Link } from 'react-router-dom'

import Footer from './compoment/general/Footer';
import { Navigate } from 'react-router-dom';
import About from './page/aboutme/About';


function App() {
  



  return (
    <div>
      <BrowserRouter>
     
      <Routes>     
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Navigate to="/home"></Navigate>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
       
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
