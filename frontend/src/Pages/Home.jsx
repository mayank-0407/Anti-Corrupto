import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Updates from '../components/Updates';
import ServiceIcon from '../components/Services';

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
