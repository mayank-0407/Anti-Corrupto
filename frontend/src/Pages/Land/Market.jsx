import React, { useState, useEffect } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { IoSearchSharp } from 'react-icons/io5';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import HeaderHome from '../../components/HeaderHome';
import { getAllLands } from '../../Utils/API/landAPI';
import { fetchUserDetails } from '../../Utils/API/authAPI';
import { getToken, isLogin } from '../../Utils/cookieSetup';

function Market() {
  const [searchTerm, setSearchTerm] = useState('');
  const [lands, setLands] = useState([]);
  const [userRole, setUserRole] = useState('');
  const [clientId, setClientId] = useState('');
  const navigate = useNavigate();

  const getLands = async () => {
    const token = getToken();
    const userDetails = await fetchUserDetails(token);
    setUserRole(userDetails.data.role);
    setClientId(userDetails.data.id);
    const allLands = await getAllLands(userDetails);
    setLands(allLands);
  };

  useEffect(() => {
    if (isLogin()) {
      getLands();
    } else {
      navigate('/login');
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="h-screen">
      <HeaderHome />
      <div
        className="w-screen h-96 rounded flex flex-col items-center justify-center opacity-90"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="text-white text-5xl pb-4 font-bold drop-shadow-xl mb-8">
          <TypeAnimation
            sequence={[
              'Anti - Corruptō',
              4000,
              'Anti - Tampering',
              1500,
              'Anti - Fraudulent',
              1500,
              'Anti - Dispute',
              1500,
              'Anti - Manipulation',
              1500,
              'Anti - Falsification',
              1500,
              'Anti - Counterfeit',
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '50px', display: 'inline-block' }}
            className="drop-shadow-xl"
            repeat={Infinity}
          />
        </div>
        <div className="w-screen flex flex-row items-center justify-center">
          <input
            type="text"
            className="h-10 w-1/3 rounded-l-xl border-2 shadow-xl p-4"
            placeholder="Search for property by Location, Owner name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="h-10 w-10 flex justify-center items-center bg-slate-800 rounded-r-xl cursor-pointer">
            <IoSearchSharp className="text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-row mb-6">
          {userRole === 'ADMIN' ? (
            <button
              onClick={() => navigate('/dashboard/land/addland')}
              className="p-4 px-12 rounded-md bg-slate-600 hover:bg-slate-800 text-white"
            >
              Add New Land
            </button>
          ) : null}
          <button
            onClick={() => navigate('/dashboard/land')}
            className="p-4 px-12 ml-4 rounded-md bg-slate-600 hover:bg-slate-800 text-white"
          >
            My Lands
          </button>
          <button
            onClick={() => navigate('/dashboard/land/Market')}
            className="p-4 px-12 ml-4 rounded-md bg-slate-600 hover:bg-slate-800 text-white"
          >
            Marketplace
          </button>
          <button
            onClick={() => navigate('/dashboard/land/interested')}
            className="p-4 px-12 ml-4 rounded-md bg-slate-600 hover:bg-slate-800 text-white"
          >
            Lands Status
          </button>
          <button
            onClick={() => navigate('/dashboard/landcases')}
            className="p-4 px-12 ml-4 rounded-md bg-slate-600 hover:bg-slate-800 text-white"
          >
            Cases
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {lands.map((land, index) => (
          <div
            key={index}
            className="flex flex-col w-2/3 h-72 bg-slate-700 rounded-lg m-4 object-fill bg-cover justify-between shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgb(255, 255, 255)), url(${land.imageUrl})`,
            }}
          >
            <div>
              <p className="px-4 pt-4 text-2xl font-bold">{land.ownerId} : {land.id}</p>
              <p className="pl-4">Type: {land.type}</p>
              <div className="flex flex-row">
                <p className="pl-4">Area: {land.area}</p>
                <div className="flex flex-row items-center">
                  <MdLocationPin className="ml-1" />
                  <p>Location: {land.location}</p>
                </div>
              </div>
            </div>
            <p className="p-4 text-lg font-bold">
              Owner: {land.owner}
              <br />
              Current Rate: ₹{land.currentPrice}/-
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Market;
