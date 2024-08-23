import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  function ServiceIcon({ iconSrc, title, thislink }) {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2 transition duration-300 ease-in-out hover:scale-110 bg-slate-100 flex item-center justify-center">
        <div className="bg-transparent rounded-lg overflow-hidden hover:shadow-lg">
          <div className="px-4 py-2 space-y-2 bg-transparent border-2 ">
            <Link to={thislink}>
              <img src={iconSrc} alt={title} className="mx-auto h-40 w-30 text-black" />
              <h1 className="text-center text-xl font-medium mt-2">{title}</h1>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-center space-x-2 bg-slate-100">
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
