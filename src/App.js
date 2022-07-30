import About from './Components/About';
import Cars from './Components/Cars';
import CarsCarusel from './Components/CarsCarusel';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import Navbar from './Components/NavBar/Navbar';


function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Cars/>
      <CarsCarusel/>
      <Footer/>
    </>
  );
}


export default App;
