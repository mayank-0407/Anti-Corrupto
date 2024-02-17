import React, { useState,useEffect, useRef } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { isLogin, logOut } from "../../Utils/cookieSetup";

const ViewVehicle = () => {
  const navigate = useNavigate();
  const [isLoggedd, setisLoggedd] = useState(false);
  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setisLoggedd(true);
    } else {
      setisLoggedd(false);
      navigate("/login");
    }
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Vehicle Information</h1>

        <div className="flex justify-between">
          <div className="w-1/2">
            <img
              src="/vehicle/bike.jpg"
              alt="Vehicle"
              className="w-full h-auto rounded"
            />
          </div>

          <div className="w-1/2 pl-6">
            <h2 className="text-xl font-bold mb-2">Vehicle Model</h2>
            <p className="text-gray-600 mb-4">Year: 2022</p>

            <h3 className="text-lg font-bold mb-2">Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Feature 1</li>
              <li>Feature 2</li>
              {/* Add more features as needed */}
            </ul>

            <h3 className="text-lg font-bold mb-2">Claims</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Claim 1</li>
              <li>Claim 2</li>
              {/* Add more claim items as needed */}
            </ul>

            <h3 className="text-lg font-bold mb-2">Chalans</h3>
            <ul className="list-disc pl-6">
              <li>Chalan 1</li>
              <li>Chalan 2</li>
              {/* Add more chalan items as needed */}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ViewVehicle;
