import React from 'react';
import Navbar from '../components/home/Navbar';
import Carousel from '../components/home/Carousel';
import Updates from '../components/home/Updates';
import ServiceIcon from '../components/home/Services';
import Sidebar from '../components/ui/Sidebar';

const Home = () => {

  return (
    <div className="h-screen w-screen">
      <div className="flex">
        <Navbar/>
      </div>

      <div className="h-screen">
        <Carousel/>
      </div>

      <div className="mx-[100px]">
        <ServiceIcon/>
      </div>
      <div className="py-10"></div>
      <div className="mx-10 overflow-x-hidden">
        <Updates/>
      </div>
      
    </div>

    
  );
};

export default Home;
