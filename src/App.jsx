
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
import Signup from "./assets/Components/Signup/signup";
import Login from "./assets/Components/Login/login";

function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/signup" ||
    location.pathname === "/login";

  return (
    <>
      {!hideNavbar && (
        <Navbar cart={cart} setCart={setCart} />
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

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

