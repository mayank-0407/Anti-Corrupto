import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  function ServiceIcon({ iconSrc, title, thislink }) {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6 px-4 transition-transform duration-300 ease-in-out hover:scale-105 flex justify-center">
        <div
          className=" rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden bg-cover "
          style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg?t=st=1726463373~exp=1726466973~hmac=c49043de1b7a2ad8f527ea803fca1c9d566dbcd2376dae01fdc2f37d065b4ed1&w=996")`,
          }}
        >
          <div className="p-4 text-center">
            <Link to={thislink} className="flex flex-col items-center">
              <img src={iconSrc} alt={title} className="h-24 w-24 mb-3" />
              <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center p-6">
      <ServiceIcon
        iconSrc="https://www.svgrepo.com/show/341206/traffic-event.svg"
        title="Traffic"
        thislink="/dashboard/vehicle"
      />
      <ServiceIcon
        iconSrc="https://www.svgrepo.com/show/308827/property-deed-real-estate-sale-house-title-house-deed.svg"
        title="Land Reg."
        thislink="/dashboard/land"
      />
      <ServiceIcon
        iconSrc="https://www.svgrepo.com/show/486188/money-tgrant-success-line.svg"
        title="Public Funding"
        thislink=""
      />
      <ServiceIcon
        iconSrc="https://www.svgrepo.com/show/352785/handshake.svg"
        title="Public Tenders"
        thislink=""
      />
      <ServiceIcon
        iconSrc="https://www.svgrepo.com/show/307068/public-people-group-masses.svg"
        title="Public Sewa"
        thislink=""
      />
      <ServiceIcon
        iconSrc="https://www.svgrepo.com/show/378754/air.svg"
        title="Pollution"
        thislink=""
      />
      <ServiceIcon iconSrc="servie.svg" title="Insurance" thislink="" />
      {/* <ServiceIcon iconSrc="servie.svg" title="Service 1" /> */}
    </div>
  );
}

export default Services;
