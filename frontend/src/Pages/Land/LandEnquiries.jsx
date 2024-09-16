import React, { useState, useEffect, useContext } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { IoSearchSharp } from 'react-icons/io5';
import { BiCategory } from 'react-icons/bi';
import { FaCaretDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { setSessionToken, isLogin, getCookie, getToken } from '../../Utils/cookieSetup';
import { useNavigate, useParams } from 'react-router-dom';
// import { LandContext } from '../../context/LandContext';
import { Link } from 'react-router-dom';
import { getUserLands } from '../../Utils/API/landAPI';
import { fetchUserDetails, fetchUserEmail, loginUser } from '../../Utils/API/authAPI';
import HeaderHome from '../../components/HeaderHome';
import {
  createInquiry,
  getInquiryLandsById,
  updateInquiryStatus,
} from '../../Utils/API/landInquiry';

function LandEnquiries() {
  const [isLoggedd, setisLoggedd] = useState(false);
  // const { checkIfWalletIsConnect } = useContext(LandContext);
  const [lands, setLands] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [clientId, setclientId] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedLand, setSelectedLand] = useState(null);
  const [filteredLandData, setfilteredLandData] = useState([]);

  const { landId } = useParams();
  const navigate = useNavigate();

  // Add fetching lands with the email associated with each user
  const getLands = async () => {
    const Token = getToken(); // Assuming this function fetches a token
    const UserDetails = await fetchUserDetails(Token);
    setclientId(UserDetails.data.id);

    const tlands = await getInquiryLandsById(UserDetails.data); // Assuming this API returns lands
    setLands(tlands); // Update lands state with fetched data
    console.log("Lands in get lands in land enquiries : ",tlands);
    separateData(tlands);
  };

  const fetchEmail = async (clientId) => {
    try {
      const userDetails = await fetchUserEmail(clientId);
      return userDetails.data.email;
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
    console.log('User Details:', userDetails);
  };

  // Function to filter data and append required fields
  const separateData = async (tlands) => {
    const newData = [];

    console.log("Lands in separateData in land enquiries : ",tlands);

    for (const land of tlands) {
      const email = await fetchEmail(land.clientId); // Sequentially fetch email for each clientId
      newData.push({
        id: land.id,
        clientId: land.clientId,
        status: land.status,
        email: email,
      });
    }

    setfilteredLandData(newData);
  };

  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setisLoggedd(true);
      getLands(); // Fetch lands and emails
      // separateData();
      console.log('Lands in LandEnquiries.jsx : ', lands);
      console.log('updated lands in LandEnquiries.jsx : ', filteredLandData);
    } else {
      setisLoggedd(false);
      navigate('/login');
    }
  }, []);

  const openApproveModal = (land) => {
    setSelectedLand(land);
    setShowModal(true);
  };

  const closeApproveModal = () => {
    setShowModal(false);
    setSelectedLand(null);
  };

  const handleApprove = async () => {
    try {
      const response = await updateInquiryStatus(selectedLand.id, 'APPROVED');
      console.log('Response:', response);
      if(response.status === 200)
        console.log(response);
      else{
        console.log(response);
      }
    } catch (error) {
      console.error('Error approving land:', error);
    }
    closeApproveModal();
  };

  return (
    <div className="h-full flex items-center flex-col justify-start bg-cover">
      <HeaderHome />
      <div
        className="flex flex-col w-full h-96 md:h-auto bg-slate-700 object-fill bg-cover justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(255, 255, 255)), url("https://images.unsplash.com/photo-1591389703635-e15a07b842d7?q=80&w=2833&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <p className=" bg-center text-white text-5xl py-20 font-bold drop-shadow-xl">
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
        </p>

        <div className="flex flex-col p-5 w-full items-center justify-center">
          <div className="flex flex-row mb-6 w-full justify-center items-center">
            <div
              className="h-12 p-4 flex flex-row ml-12 justify-center text-sm items-center bg-slate-800 rounded-xl text-white shadow-xl"
              // style={{ whiteSpace: "nowrap" }}
            >
              <select
                name="sortBy"
                id="sortBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className=" p-2 px-4 text-white bg-slate-800"
                required
              >
                <option value="" disabled selected>
                  Sort By
                </option>
                <option value="1">Land Type</option>
                <option value="2">Price</option>
                <option value="3">Area</option>
                <option value="4">Location</option>
              </select>
            </div>

            <input
              type="text"
              className="h-12 ml-2 pl-4 w-full rounded-l-xl border-2 border-r-0 shadow-xl"
              placeholder="Search for property by Location, Owner name...."
            />
            <div className="h-12 p-4 flex mr-14 justify-center items-center bg-slate-800 rounded-r-xl cursor-pointer text-white shadow-xl">
              Search
              <IoSearchSharp className="text-white ml-2" />
            </div>
          </div>

          <div className="mx-12 flex flex-row justify-center ">
            <button
              onClick={() => {
                navigate('/dashboard/land/addland');
              }}
              className="flex flex-row  p-4 px-36 mr-8 w-16 rounded-md bg-slate-600 hover:bg-slate-800 justify-center text-white text-nowrap"
            >
              Add New Land
            </button>
            <button
              onClick={() => {
                navigate('/dashboard/land/Market');
              }}
              className="flex p-4 px-36 mr-8 w-16 rounded-md bg-slate-600 hover:bg-slate-800 text-white justify-center text-nowrap"
            >
              Marketplace
            </button>
            <button
              onClick={() => {
                navigate('/dashboard/land/interested');
              }}
              className="flex p-4 px-36 mr-8 w-16 rounded-md bg-slate-600 hover:bg-slate-800 text-white justify-center text-nowrap"
            >
              Lands Status
            </button>
            <button
              onClick={() => {
                navigate('/dashboard/land');
              }}
              className="flex p-4 px-36 rounded-md w-16 bg-slate-600 hover:bg-slate-800 text-white justify-center text-nowrap"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>

      <p className="text-xl mt-8 m-4 font-bold">Enquiries</p>

      <div className="flex flex-col w-3/4 mx-auto mt-8 bg-slate-700 rounded-lg p-4 shadow-2xl">
        <h1 className="text-2xl font-bold text-white mb-4">Buyers List</h1>
        <table className="min-w-full bg-slate-800 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 text-left text-white px-4">Buyer ID</th>
              <th className="py-2 text-left text-white px-4">Buyer Email</th>
              <th className="py-2 text-left text-white px-4">Status</th>
              <th className="py-2 text-left text-white px-4">Change Status</th>
              <th className="py-2 text-left text-white px-4">Contact</th>
            </tr>
          </thead>
          <tbody>
            {filteredLandData.map((land) => (
              <tr key={land.id} className="odd:bg-slate-700 even:bg-slate-600">
                <td className="py-3 px-4 text-white">{land.clientId}</td>
                <td className="py-3 px-4 text-white">{land.email}</td>{' '}
                {/* Displaying the email here */}
                <td className="py-3 px-4 text-white">{land.status}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => openApproveModal(land)}
                    disabled={land.status === 'APPROVED'} // Disable the button if already approved
                    className={`font-bold py-2 px-4 rounded ${
                      land.status === 'APPROVED'
                        ? 'bg-gray-500 cursor-not-allowed' // Gray color and disabled cursor for already approved
                        : 'bg-blue-500 hover:bg-blue-700 text-white' // Active button style
                    }`}
                  >
                    {land.status === 'APPROVED' ? 'Approved' : 'Approve'}
                  </button>
                </td>
                <td className="py-3 px-4">
                  <a
                    href={`mailto:${land.email}`}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Contact
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Approve Land</h2>
            <p>Are you sure you want to approve the Client's but Request?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleApprove}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Approve
              </button>
              <button
                onClick={closeApproveModal}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandEnquiries;
