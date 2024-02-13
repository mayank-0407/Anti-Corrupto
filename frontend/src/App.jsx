import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { images } from "./assets/images";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export default function App() {
  return (
    <BrowserRouter className="flex items-center justify-center">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
