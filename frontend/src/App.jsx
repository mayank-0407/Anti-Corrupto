import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import AdminSignup from './Pages/Auth/AdminSignup';
import VehiclesPage from './Pages/Traffic/Vehicle/VehiclesPage';
import ViewVehicle from './Pages/Traffic/Vehicle/ViewVehicle';
import VehicleChallan from './Pages/Traffic/Challan/VehicleChallan';
import AddVehicle from './Pages/Traffic/Vehicle/AddVehicle';
import AddVehicleChallan from './Pages/Traffic/Challan/AddVehicleChallan';
import PayingChallan from './Pages/Traffic/Challan/PayingChallan';
import AddLand from './Pages/Land/AddLand';
import ViewLand from './Pages/Land/ViewLand';
import AddCase from './Pages/Land/AddCase';
import LandDashboard from './Pages/Land/LandDashboard';
import UserLandInterest from './Pages/Land/UserLandInterest';
import LandEnquiries from './Pages/Land/LandEnquiries';
import Market from './Pages/Land/Market';
import TransferLand from './Pages/Land/TransferLand';
import Cases from './Pages/Land/Cases';
import ProtectedRoute from './ProtectedRoute';
import { getCookie } from './Utils/cookieSetup';
import { fetchUserDetails } from './Utils/API/authAPI';

export default function App() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      const sessionId = getCookie('token');
      try {
        const userDetails = await fetchUserDetails(sessionId);
        if (userDetails && userDetails.data) {
          let userRole = userDetails.data.role;
          console.log('User role:', userRole);
          setRole(userRole);
        } else {
          setRole(null);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        setRole(null);
      }
      setLoading(false);
    };
    fetchRole();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter className="flex items-center justify-center bg-slate-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/vehicle" element={<VehiclesPage />} />
        <Route path="/dashboard/vehicle/view/:vehicleId" element={<ViewVehicle />} />
        <Route path="/dashboard/vehicle/:vehicleId/challan" element={<VehicleChallan />} />
        <Route path="/dashboard/vehicle/:vehicleId/challan/:challanId" element={<PayingChallan />} />
        
        {/* Role-based protection for AddVehicle (ADMIN only) */}
        <Route
          path="/dashboard/vehicle/add"
          element={
            <ProtectedRoute element={<AddVehicle />} userRole={role} allowedRoles={['ADMIN']} />
          }
        />

        {/* Role-based protection for AddVehicleChallan (ADMIN only) */}
        <Route
          path="/dashboard/vehicle/:vehicleId/challan/add"
          element={
            <ProtectedRoute element={<AddVehicleChallan />} userRole={role} allowedRoles={['ADMIN']} />
          }
        />

        <Route path="/dashboard/land" element={<LandDashboard />} />
        <Route path="/dashboard/land/interested" element={<UserLandInterest />} />
        <Route path="/dashboard/land/enquiries/:landId" element={<LandEnquiries />} />

        {/* Role-based protection for AddLand (ADMIN only) */}
        <Route
          path="/dashboard/land/addland"
          element={
            <ProtectedRoute element={<AddLand />} userRole={role} allowedRoles={['ADMIN']} />
          }
        />

        <Route path="/dashboard/land/View" element={<ViewLand />} />
        <Route path="/dashboard/land/Market" element={<Market />} />
        <Route path="/dashboard/land/transfer/:id" element={<TransferLand />} />
        
        {/* Role-based protection for Cases (ADMIN only) */}
        <Route
          path="/dashboard/land/cases"
          element={
            <ProtectedRoute element={<Cases />} userRole={role} allowedRoles={['ADMIN']} />
          }
        />

        {/* Role-based protection for AddCase (ADMIN only) */}
        <Route
          path="/dashboard/land/addcase"
          element={
            <ProtectedRoute element={<AddCase />} userRole={role} allowedRoles={['ADMIN']} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
