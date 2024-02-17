import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { images } from "./assets/images";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import VehiclesPage from "./Pages/Traffic/VehiclesPage";
import ViewVehicle from "./Pages/Traffic/ViewVehicle";
import VehicleChallan from "./Pages/Traffic/VehicleChallan";
import AddVehicle from "./Pages/Traffic/AddVehicle";
import AddVehicleChallan from "./Pages/Traffic/AddVehicleChallan";

export default function App() {
  return (
    <BrowserRouter className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/vehicle" element={<VehiclesPage />} />
        <Route path="/dashboard/vehicle/view" element={<ViewVehicle />} />
        <Route path="/dashboard/vehicle/challan" element={<VehicleChallan />} />
        <Route path="/dashboard/vehicle/challan/add" element={<AddVehicleChallan />} />
        <Route path="/dashboard/vehicle/add" element={<AddVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}
