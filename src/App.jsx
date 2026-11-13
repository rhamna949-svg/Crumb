
import { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css'
import Navbar from "./assets/Components/Navbar/navbar"
import Home from "./assets/Components/Home/home"
import About from "./assets/Components/About/about"
import Contact from "./assets/Components/Contact/contact"
import Story from "./assets/Components/Story/story"
import Menu from "./assets/Components/Menu/menu"
import Beverages from "./assets/Components/Menu/Beverages";
import FoodBakery from "./assets/Components/Menu/FoodBakery";
import Desserts from "./assets/Components/Menu/Desserts";


function App() {
  const [cart, setCart] = useState([]);

return (
  <>
    <Navbar cart={cart} setCart={setCart} />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/story" element={<Story />} />
      <Route path="/menu" element={<Menu />} />

      <Route
        path="/beverages"
        element={<Beverages cart={cart} setCart={setCart} />}
      />

      <Route
        path="/food-bakery"
        element={<FoodBakery cart={cart} setCart={setCart} />}
      />

      <Route path="/desserts" element={<Desserts />} />
    </Routes>
  </>
);

}

export default App;

