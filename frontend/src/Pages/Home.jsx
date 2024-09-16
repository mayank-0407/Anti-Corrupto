import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/home/Carousel';
import Updates from '../components/home/Updates';
import ConnectToApp from '../components/home/ConnectToApp';
import ServiceIcon from '../components/home/Services';
import Footer from '../components/footer';
import TextFrontPage from '../components/home/TextFrontPage';
import MobileApp from '../components/home/MobileApp';

const Home = () => {
  return (
    <div className="h-screen w-screen  font-thin">
      <div className="flex sticky z-50 top-0">
        <Navbar />
      </div>
      <div className="py-4">
        <Carousel />
      </div>
      {/* <Updates /> */}
      <div className=" py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto my-5">
          <h1 className="text-center text-3xl md:text-4xl font-bold underline mb-6 text-cyan-900">
            Services
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <ServiceIcon />
          </div>
        </div>
      </div>
      <div>
        <TextFrontPage />
      </div>
      <div>
        <MobileApp />
      </div>

      <div className="mt-10 bg-cyan-900">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
