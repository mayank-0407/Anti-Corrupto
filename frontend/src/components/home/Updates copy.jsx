import React, { useState, useEffect, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const UpdatesTab = () => {
  const updates = [
    {
      id: 1,
      image: "login.jpg",
      text: "New notification 1",
    },
    {
      id: 2,
      image: "login.jpg",
      text: "New notification 2",
    },
    {
      id: 3,
      image: "login.jpg",
      text: "New notification 3",
    },
    {
      id: 4,
      image: "login.jpg",
      text: "New notification 4",
    },
    {
      id: 5,
      image: "login.jpg",
      text: "New notification 5",
    },
    {
      id: 6,
      image: "login.jpg",
      text: "New notification 6",
    },
    {
      id: 7,
      image: "login.jpg",
      text: "New notification 7",
    },
    {
      id: 8,
      image: "login.jpg",
      text: "New notification 8",
    },
    {
      id: 9,
      image: "login.jpg",
      text: "New notification 9",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    return () => clearTimeout(timer); // Cleanup function to clear the timeout on component unmount or slide change
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === updates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? updates.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex items-center justify-center mx-10 ">
      <h2 className="text-4xl font-bold mb-2 px-2 ">
        New in <div className="">Anticorrupto</div>
      </h2>
      {/* <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2" onClick={handlePrev}>
        <BsArrowLeft className="text-gray-600" />
      </button> */}
      <div className="relative flex flex-no-wrap overflow-hidden">
        <div
          ref={containerRef}
          className="flex"
          style={{
            width: `${updates.length * 80}px`,
            transform: `translateX(-${currentIndex * containerWidth}px)`,
          }}
        >
          {updates.map((update) => (
            <div key={update.id} className="w-64 flex-shrink-0 px-2">
              <div className="bg-white rounded-lg shadow-md ">
                <img
                  src={update.image}
                  alt=""
                  className="h-40 w-full object-cover rounded-t-lg max-w-xs transition duration-300 ease-in-out hover:scale-110"
                />
                {/* <p className="p-4">{update.text}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2" onClick={handleNext}>
        <BsArrowRight className="text-gray-600" />
      </button> */}
    </div>
  );
};

export default UpdatesTab;
