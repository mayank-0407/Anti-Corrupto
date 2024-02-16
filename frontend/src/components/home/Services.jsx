import React from "react";

function Services() {
  function ServiceIcon({ iconSrc, title }) {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2 transition duration-300 ease-in-out hover:scale-110">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-2 space-y-2">
            <img src={iconSrc} alt={title} className="mx-auto h-40 w-40" />
            <h1 className="text-center text-xl font-bold mt-2">{title}</h1>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center space-x-2">
      <ServiceIcon iconSrc="./home/traffic.png" title="Traffic" />
      <ServiceIcon iconSrc="./home/land.jpg" title="Land Registeration" />
      <ServiceIcon iconSrc="./home/fund.png" title="Public Funding" />
      <ServiceIcon iconSrc="./home/tendor.png" title="Public Tendors" />
      <ServiceIcon iconSrc="servie.svg" title="Public Sewa" />
      <ServiceIcon iconSrc="servie.svg" title="Pollution" />
      <ServiceIcon iconSrc="servie.svg" title="Insurance" />
      {/* <ServiceIcon iconSrc="servie.svg" title="Service 1" /> */}
    </div>
  );
}

export default Services;
