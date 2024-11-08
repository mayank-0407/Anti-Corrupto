import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LandContext } from '../context/LandContext';
import { getCookie, isLogin, logOut, setCookie, getToken } from '../Utils/cookieSetup';
import { fetchUserDetails } from '../Utils/API/authAPI';
import { 
  Home,
  Car,
  Landmark,
  LogOut,
  Menu,
  X,
  Plus,
  Eye,
  ShoppingCart,
  FileText,
  UserCircle,
  Wallet,
  LayoutDashboard,
  Heart,
  CircleDollarSign,
  AlertCircle
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [walletLinked, setWalletLinked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const sidebarRef = useRef(null);

  const checkLoginStatus = async () => {
    const WalletLinked = getCookie('WalletLinked');
    const WalletAccountNumber = getCookie('WalletAccountNumber');
    setAccountNumber(WalletAccountNumber || '');
    setWalletLinked(Boolean(WalletLinked));
  };

  const { checkIfWalletIsConnectLogin } = useContext(LandContext);

  useEffect(() => {
    checkLoginStatus();
    getUserDetails();
    const checkLoginSession = isLogin();
    setIsLoggedIn(checkLoginSession);
  }, []);

  const getUserDetails = async () => {
    const token = getToken();
    if (token) {
      try {
        const response = await fetchUserDetails(token);
        if (response.data) {
          setUserRole(response.data.role);
          setUserName(response.data.name);
          setUserEmail(response.data.email);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
  };

  

  const handleWalletLink = async () => {
    const walletLink = await checkIfWalletIsConnectLogin();
    if (walletLink !== 400) {
      setCookie('WalletLinked', true);
      setCookie('WalletAccountNumber', walletLink);
      setAccountNumber(walletLink);
      setWalletLinked(true);
    }
  };

  const handleLogout = () => {
    logOut();
    setIsLoggedIn(false);
    navigate('/');
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: '/',
      showAlways: true
    },
    {
      title: 'Vehicle Management',
      icon: <Car className="w-5 h-5" />,
      subItems: [
        { title: 'View Vehicles', icon: <Eye className="w-4 h-4" />, path: '/dashboard/vehicle' },
        { title: 'Add Vehicle', icon: <Plus className="w-4 h-4" />, path: '/dashboard/vehicle/add', adminOnly: true }
      ]
    },
    {
      title: 'Land Management',
      icon: <Landmark className="w-5 h-5" />,
      subItems: [
        { title: 'Land Dashboard', icon: <LayoutDashboard className="w-4 h-4" />, path: '/dashboard/land' },
        { title: 'View Land', icon: <Eye className="w-4 h-4" />, path: '/dashboard/land/View' },
        { title: 'Add Land', icon: <Plus className="w-4 h-4" />, path: '/dashboard/land/addland', adminOnly: true },
        { title: 'Marketplace', icon: <ShoppingCart className="w-4 h-4" />, path: '/dashboard/land/Market' },
        { title: 'My Interests', icon: <Heart className="w-4 h-4" />, path: '/dashboard/land/interested' },
        { title: 'Cases', icon: <AlertCircle className="w-4 h-4" />, path: '/dashboard/land/cases', adminOnly: true },
        { title: 'Add Case', icon: <Plus className="w-4 h-4" />, path: '/dashboard/land/addcase', adminOnly: true }
      ]
    }
  ];

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                <img src="/Logo_1.png" alt="Logo" className="h-8 mt-2 w-auto" />
                <span className="ml-2 text-xl font-semibold hidden sm:inline">Anti Corrupto</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  {walletLinked ? (
                    <div className="flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-lg">
                      <Wallet className="w-4 h-4" />
                      <span className="text-sm font-medium">{`${accountNumber.slice(0, 6)}...${accountNumber.slice(-4)}`}</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleWalletLink}
                      className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                    >
                      <Wallet className="w-4 h-4" />
                      <span>Connect Wallet</span>
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition-colors font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/login')}
                    className="bg-white text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate('/signup')}
                    className="bg-white text-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* User Profile Section */}
        <div className="p-4 border-b mt-20">
          <div className="flex items-center space-x-3">
            <UserCircle className="w-10 h-10 text-gray-400" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{userName}</p>
              <p className="text-xs text-gray-500 truncate">{userEmail}</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              {(!item.adminOnly || (item.adminOnly && userRole === 'ADMIN')) && (
                <>
                  {item.subItems ? (
                    <div className="mb-2">
                      <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-600">
                        {item.icon}
                        <span className="ml-3">{item.title}</span>
                      </div>
                      <div className="ml-6 space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          (!subItem.adminOnly || (subItem.adminOnly && userRole === 'ADMIN')) && (
                            <button
                              key={subIndex}
                              onClick={() => navigate(subItem.path)}
                              className="flex items-center w-full px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {subItem.icon}
                              <span className="ml-3">{subItem.title}</span>
                            </button>
                          )
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => navigate(item.path)}
                      className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.icon}
                      <span className="ml-3">{item.title}</span>
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;