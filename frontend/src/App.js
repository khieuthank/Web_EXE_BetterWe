import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/home/Home';
import Header from './compoment/general/Header';
import Footer from './compoment/general/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>     
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
