import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LandContext } from '../../context/LandContext';
import { fetchUserDetails } from '../../Utils/API/authAPI';
import { addLandCase } from '../../Utils/API/landCaseAPI';
import { getToken, isLogin } from '../../Utils/cookieSetup';
import HeaderAdmin from '../../components/HeaderAdmin';

import Navbar from '../../components/Navbar';

const AddCase = () => {
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [myUser, setMyUser] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [caseDescription, setCaseDescription] = useState('');
  const [transferLandId, setTransferLandId] = useState('');

  const navigate = useNavigate();
  const { checkIfWalletIsConnect } = useContext(LandContext);

  // Handle form submission
  const handleNewSubmit = async (e) => {
    e.preventDefault();

    const myToken = getToken();
    const thisUser = await fetchUserDetails(myToken);

    setMyUser(thisUser.data.id);

    let caseData = {
      caseDescription,
      transferLandId,
      ownerId: thisUser.data.id,
    };

    try {
      const res = await addLandCase(caseData);
      if (res.status === 200) {
        navigate('/dashboard/cases'); // Navigate to cases page after successful addition
      } else {
        console.log(res);
      }
    } catch (error) {
      console.error('Error adding case:', error);
      setError('Failed to add case. Please try again.');
      setIsError(true);
    }
  };

  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      navigate('/login');
    }
    checkIfWalletIsConnect();
  }, []);

  return (
    <div
      className="h-screen flex flex-row justify-center items-center font object-cover"
      style={{
        backgroundImage: `url(
          "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        )`,
      }}
    >
      <Navbar />
      <div className="mt-40 w-1/3 m-20 p-4 flex flex-row items-center justify-center rounded-xl backdrop-brightness-90">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full order-2 md:order-1">
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4 text-center">Add New Case</h1>

              <form className="mb-4" onSubmit={handleNewSubmit}>
                <div className="mb-2">
                  <label htmlFor="caseDescription" className="block mb-2 text-left font-semibold">
                    Case Description
                  </label>
                  <input
                    type="text"
                    name="caseDescription"
                    id="caseDescription"
                    value={caseDescription}
                    onChange={(e) => setCaseDescription(e.target.value)}
                    placeholder="Enter case description"
                    className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50 opacity-50"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="transferLandId" className="block mb-2 text-left font-semibold">
                    Transfer Land ID
                  </label>
                  <input
                    type="text"
                    name="transferLandId"
                    id="transferLandId"
                    value={transferLandId}
                    onChange={(e) => setTransferLandId(e.target.value)}
                    placeholder="Enter Transfer Land ID"
                    className="w-full p-2 border border-gray-300 rounded-2xl mb-2 text-sm bg-blue-50 opacity-50"
                    required
                  />
                </div>

                {isError && (
                  <div className="px-1 my-2 text-sm text-red-500 rounded-lg" role="alert">
                    <span className="font-medium">*{error}</span>
                  </div>
                )}

                <button type="submit" className="bg-blue-800 text-white p-2 w-full rounded-2xl">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCase;
