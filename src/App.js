import About from './Components/About';
import Cars from './Components/Cars';
import CarsCarusel from './Components/CarsCarusel';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { Link, Route, Routes } from "react-router-dom"
import "./Components/NavBar/Navbar.css";
import logo from './img/logo.png'
import { useState } from 'react';
import AllCars from './Components/AllCars';

function App() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggler = () => {
    active === "nav__menu" 
    ? setActive('nav__menu nav__active') 
    : setActive ("nav__menu");

    toggleIcon === "nav__toggler" 
    ? setToggleIcon ('nav__toggler toggle')
    : setToggleIcon('nav__toggler')
  }

  return (
    <>

    <nav>
        <Link to='/'>
          <img className='site_logo' src={logo} alt="site logo" />
        </Link>
      <ul className={active}>
        <li className='nav__item'><Link className='nav__link' to='/home'>Home</Link></li>
        <li className='nav__item'><Link className='nav__link' to='/about'>About</Link></li>
        <li className='nav__item'><Link className='nav__link' to='/cars'>Cars</Link></li>
        <li className='nav__item'><Link className='nav__link' to='/carusel'>Carusel</Link></li>
        <li className='nav__item'><Link className='nav__link' to='/footer'>Contact</Link></li>
        <li className='nav__item'><Link className='nav__link' to='/allcars'>All Cars</Link></li>
      </ul>
      <div onClick={navToggler} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          
        </div>
    </nav>
      

      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cars" element={<Cars/>}/>
        <Route path="/carusel" element={<CarsCarusel/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/allcars" element={<AllCars/>}/>

      </Routes>
    <Footer/>
      {/* <Navbar/>
      <Home/>
      <About/>
      <Cars/>
      <CarsCarusel/>
      <Footer/> */}
    </>

  );
}


export default App;
