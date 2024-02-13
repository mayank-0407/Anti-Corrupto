import React, { useState } from 'react';
import Avatar from './Avatar';
import { FiLogOut, FiSettings } from 'react-icons/fi'; // Assuming these are logout and services icons
import { BsFillPersonLinesFill } from 'react-icons/bs'; // Assuming this is the user icon
import Sheet from 'react-modal-sheet';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked");
  };

  const handleServices = () => {
    // Implement services menu logic here
    console.log("Services clicked");
  };

  return (
    <div className="bg-gray-800 text-white py-4 w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center px-10">
          <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
          <span className="text-xl font-semibold"></span>
        </div>
        
        <div className="flex items-center">
          <a href="#" className="px-4 hover:text-purple-700">Home</a>
          <a href="#" className="px-4 hover:text-purple-700">Services</a>
        </div>

        <div className="flex items-center px-10">
          <button className="px-4 py-2 bg-purple-600 rounded-md mr-4 hover:bg-purple-700">Login</button>
          <span className=" mx-1 text-purple-600">|</span>
          <button className="px-4 py-2 text-purple-600 rounded-md hover:bg-gray-700">Signup</button>
        </div>

        <div>
          <button onClick={toggleSidebar}><Avatar/></button>
          <Sheet
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            snapPoints={[0, '50%']}
          >
            <Sheet.Container style={{ zIndex: 999 }}>
              <Sheet.Header />
              <Sheet.Content>
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <BsFillPersonLinesFill className="text-2xl mr-2" />
                    <span className="text-xl">Username</span>
                  </div>
                  <button onClick={handleLogout} className="block px-4 py-2 text-white bg-red-500 rounded-md w-full mb-2">Logout</button>
                  <button onClick={handleServices} className="block px-4 py-2 text-white bg-blue-500 rounded-md w-full">Services</button>
                </div>
              </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
