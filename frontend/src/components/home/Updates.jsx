import React from 'react';

const UpdatesTab = () => {
  const updates = [
    { 
      id: 1,
      image: "login.jpg",
      text: "New notification 1" 
    },
    {
      id: 2, 
      image: "login.jpg",
      text: "New notification 2"
    },
    {
      id: 3, 
      image: "login.jpg",
      text: "New notification 3"
    },
    {
      id: 4, 
      image: "login.jpg",
      text: "New notification 4"
    },
    {
      id: 5, 
      image: "login.jpg",
      text: "New notification 5"
    },
    {
      id: 6, 
      image: "login.jpg",
      text: "New notification 6"
    },
    {
      id: 7, 
      image: "login.jpg",
      text: "New notification 7"
    },
    {
      id: 8, 
      image: "login.jpg",
      text: "New notification 8"
    },
    {
      id: 9, 
      image: "login.jpg",
      text: "New notification 9"
    },
  ];

  return (
    <div className="bg-gray-200 p-4 overflow-x-auto">
      <h2 className="text-lg font-bold mb-2">Updates</h2>
      <div className="flex flex-no-wrap">
        {updates.map((update) => (
          <div key={update.id} className="w-64 flex-shrink-0 mr-4">
            <div className="bg-white rounded-lg shadow-md">
              <img 
                src={update.image}
                alt=""
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <p className="p-4">{update.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesTab;
