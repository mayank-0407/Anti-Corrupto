import React, { useState,useEffect, useRef } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

import { useNavigate } from "react-router-dom";
import { isLogin, logOut } from "../../Utils/cookieSetup";

const VehiclesPage = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([
    {
      id: 1,  
      name: "Toyota Corolla",
      image: "/login.jpg",
      make: "Toyota",
      model: "Corolla",
      year: 2022,
      color: "White"  
    },
    {
       id: 2,
       name: "Honda Civic",
       image: "/login.jpg",
       make: "Honda",
       model: "Civic",
       year: 2020,
       color: "Black"
    }
  ]);

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
    <div>
      <div className="flex-col space-y-5">
        <Navbar />
      </div>
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <button onClick={()=>{navigate('/dashboard/vehicle/add')}}  className='bg-blue-600 rounded-md mr-4 hover:bg-blue-700 text-white p-2 my-3'>+ Add Vehicle</button>
        <div className="grid gap-8">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="bg-white overflow-hidden rounded-lg shadow-md md:flex">
              <div className="px-6 py-8 md:w-1/2">
                <h2 className="text-xl font-semibold">{vehicle.name}</h2>   
                <p className="text-gray-600">
                  {vehicle.year} {vehicle.make} {vehicle.model} - {vehicle.color}
                </p>

                <button 
                  className="mt-4 px-3 py-2 bg-blue-600 text-white rounded shadow"
                  onClick={()=>{navigate(`/dashboard/vehicle/view`)}}
                >
                  View Details  
                </button>
<p></p>
                <button 
                  className="mt-4 px-3 py-2 bg-blue-600 text-white rounded shadow"
                  onClick={()=>{navigate(`/dashboard/vehicle/challan`)}}
                >
                  Challans  
                </button>
              </div>
              
              <img 
                src={vehicle.image}
                alt={vehicle.name}
                // height={1}
                // width={5}
                className="mx-auto h-full w-[500px] rounded-r-lg"
              />
            </div>
          ))}
       </div>
     </div>
    </div>
    <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default VehiclesPage;