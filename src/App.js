// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HomeButton from "./components/HomeButton";

// Pages
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
        {/* Add other pages if needed */}
      </Routes>

      {/* Floating Home Button */}
      <HomeButton />
    </BrowserRouter>
  );
}

export default App;