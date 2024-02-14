import React from 'react';

function Services() {
  return (
    <div className="flex flex-wrap justify-center space-y-3 space-x-2">
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      <ServiceIcon
        iconSrc="/icon1.png"
        title="Service 1"
      />
      {/* Add more ServiceIcon components as needed */}
    </div>
  );
}

function ServiceIcon({ iconSrc, title }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-2">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-2 space-y-2">
          <img src={iconSrc} alt={title} className="mx-auto h-20 w-20" />
          <h1 className="text-center text-xl font-bold mt-2">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Services;
