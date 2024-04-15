import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { images } from "./assets/images";

import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard";
import VehiclesPage from "./Pages/Traffic/Vehicle/VehiclesPage";
import ViewVehicle from "./Pages/Traffic/Vehicle/ViewVehicle";
import VehicleChallan from "./Pages/Traffic/Challan/VehicleChallan";
import AddVehicle from "./Pages/Traffic/Vehicle/AddVehicle";
import AddVehicleChallan from "./Pages/Traffic/Challan/AddVehicleChallan";

export default function App() {
  return (
    <BrowserRouter className="flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/vehicle" element={<VehiclesPage />} />
        <Route path="/dashboard/vehicle/view/:vehicleId" element={<ViewVehicle />} />
        <Route path="/dashboard/vehicle/:vehicleId/challan" element={<VehicleChallan />} />
        <Route path="/dashboard/vehicle/:vehicleId/challan/add" element={<AddVehicleChallan />} />
        <Route path="/dashboard/vehicle/add" element={<AddVehicle />} />
      </Routes>
    </BrowserRouter>
  );
}
