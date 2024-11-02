import React, { useState, useEffect, useRef, useContext } from 'react';
import { getCookie, isLogin, logOut, setCookie } from '../Utils/cookieSetup';
import { BsFillPersonLinesFill } from 'react-icons/bs'; // Assuming this is the user icon
import Sidebar, { SidebarItem } from './ui/Sidebar';
import { useNavigate } from 'react-router-dom';
import { LandContext } from '../context/LandContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [accountNumberr, setaccountNumberr] = useState(0);
  const [WalletLogged, setWalletLogged] = useState(false);
  const sidebarRef = useRef(null);

  const { checkIfWalletIsConnectLogin } = useContext(LandContext);

  const [isLoggedd, setisLoggedd] = useState(false);
  useEffect(() => {
    setBlockchainVartoStates();
    const checkLoginSession = isLogin();
    setisLoggedd(checkLoginSession);
  }, [1]);

  const setBlockchainVartoStates = async () => {
    const WalletLinked = getCookie('WalletLinked');
    const WalletAccountNumber = getCookie('WalletAccountNumber');
    setaccountNumberr(WalletAccountNumber);
    if(WalletLinked)
      setWalletLogged(true);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logOut();
    setisLoggedd(false);
    navigate('/');
  };

  const handleServices = () => {
    console.log('Services clicked');
  };

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  const handleBloackchainWalletLink = async () => {
    const walletLink = await checkIfWalletIsConnectLogin();
    if (walletLink != 400) {
      setCookie('WalletLinked', true);
      setCookie('WalletAccountNumber', walletLink);
    }
  };
  // alert('Please Install Metamask or any web3 Wallet');
  return (
    <div className="bg-blue-500 text-white py-4 w-screen">
      <div className="container mx-auto flex justify-between items-center relative px-10">
        <div className="flex items-center">
          <img src="/Logo_1.png" alt="Logo" className="h-8 mr-4" />
          <span
            className="text-xl font-semibold hidden sm:inline cursor-pointer"
            onClick={() => navigate('/')}
          >
            Anti Corrupto
          </span>
        </div>

        <div className="flex items-center ml-auto">
          {isLoggedd ? (
            <>
              {/* <button
                onClick={() => checkIfWalletIsConnectLogin()}
                className="px-4 py-2 bg-slate-50 rounded-md mr-4 font-semibold hover:bg-slate-700 hover:text-slate-100 text-black"
              >
                Connect Wallet
              </button> */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-slate-700 rounded-md mr-4 hover:bg-slate-900"
              >
                Logout
              </button>
              <button onClick={toggleSidebar}>
                <BsFillPersonLinesFill className="text-white text-2xl" />
              </button>
              {isSidebarOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-50"
                  onClick={handleOutsideClick}
                >
                  <div
                    ref={sidebarRef}
                    className="absolute top-0 right-0 bg-white w-64 shadow-lg h-full overflow-y-auto transform transition-transform duration-300 ease-in-out"
                  >
                    <Sidebar>
                      <SidebarItem text="Logout" onClick={handleLogout} />
                      <SidebarItem text="Services" onClick={handleServices} />
                    </Sidebar>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {WalletLogged ? (
                <button
                  // onClick={() => handleBloackchainWalletLink()}
                  className="px-4 py-2 bg-slate-50 rounded-md mr-4 font-semibold hover:bg-slate-700 hover:text-slate-100 text-black"
                >
                  {accountNumberr}
                </button>
              ) : (
                <button
                  onClick={() => handleBloackchainWalletLink()}
                  className="px-4 py-2 bg-slate-50 rounded-md mr-4 font-semibold hover:bg-slate-700 hover:text-slate-100 text-black"
                >
                  Connect Wallet
                </button>
              )}
              {WalletLogged ? (
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 bg-slate-50 rounded-md mr-4 font-semibold hover:bg-slate-700 hover:text-slate-100 text-black"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={() => alert('Please connect wallet')}
                  className="px-4 py-2 bg-slate-50 rounded-md mr-4 font-semibold hover:bg-slate-700 hover:text-slate-100 text-black"
                >
                  Login
                </button>
              )}
              <span className="mx-1 text-slate-50">|</span>
              <button
                onClick={() => navigate('/signup')}
                className="px-4 py-2 text-slate-50 rounded-md font-semibold hover:bg-gray-700"
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
