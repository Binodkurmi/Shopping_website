import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';


import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Orders from './Pages/Orders';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
  


function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
			<ToastContainer/>
      <Navbar />
			<SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product/:ProductId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
			<Footer/>
    </div>
  );
}

export default App;
