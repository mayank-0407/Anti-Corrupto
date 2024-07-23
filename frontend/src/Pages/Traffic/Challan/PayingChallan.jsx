import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { isLogin, logOut, getToken } from '../../../Utils/cookieSetup';
import { fetchUserDetails } from '../../../Utils/API/authAPI';
import { addChallan, getChallansById } from '../../../Utils/API/challanApi';
import { ChallanContext } from '../../../context/ChallanContext';

function PayingChallan() {
  const { payChallan, getUserChallansfunc } = useContext(ChallanContext);
  const [isLoggedd, setisLoggedd] = useState(false);
  const { vehicleId, challanId } = useParams();
  const navigate = useNavigate();

  const challan = async (challanId) => {
    try {
      const challanData = await getChallansById(challanId);
      console.log("chalan ki ki",challanData)
      console.log(challanData.id);
      payChallan(challanData);
      let metamask_address = '0x2Bf6A37145e08a1E556891D7dE6f5c2cCEAf457C';
      console.log()
      let f = getUserChallansfunc(metamask_address);
      console.log("challan in getuserchallanfunc",f)

    } catch (error) {
      console.error('Error fetching challans:', error);
    }
  };

  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setisLoggedd(true);
      const challanData = challan(challanId);
    } else {
      setisLoggedd(false);
      navigate('/login');
    }
  }, []);

  return <div>PayingChallan</div>;
}

export default PayingChallan;
