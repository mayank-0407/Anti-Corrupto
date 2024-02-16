import React from 'react';
import Home from './Pages/Home';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { images } from "./assets/images";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export default function App() {
  return (
    <BrowserRouter className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
