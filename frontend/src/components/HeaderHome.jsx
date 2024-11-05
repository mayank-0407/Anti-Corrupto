import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { MoreVert } from '@mui/icons-material';
// import logo from '../assets/Anti-Corrupto.png';
import { setSessionToken, isLogin, logOut } from '../Utils/cookieSetup';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function HeaderHome() {
  const [isLoggedd, setisLoggedd] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginSession = isLogin();
    setisLoggedd(checkLoginSession);
  }, []);

  const handleLogout = () => {
    logOut();
    setisLoggedd(false);
    navigate('/');
  };

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const navLinks = [
    { text: 'Profile', path: '/profile' },
    { text: 'My Lands', path: '/dashboard/land' },
    { text: 'Marketplace', path: '/dashboard/land/Market' },
    { text: 'Lands Status', path: '/dashboard/land/interested' },
    { text: 'Cases', path: '/dashboard/land/cases' },
    { text: 'Connect Wallet', path: '/connect-wallet' },
    { text: 'Settings', path: '/settings' },
  ];

  const drawerLinks = [
    { text: 'About', path: '/about' },
    { text: 'Features', path: '/features' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' },
    ...navLinks,
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {drawerLinks.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={NavLink} to={item.path}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {isLoggedd ? (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/login">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div className="p-3 bg-blue-500 w-screen opacity-95 flex flex-row justify-between items-center">
      {/* Ellipsis icon for mobile sidebar */}
      <ul className="flex md:hidden px-4 flex-row justify-end items-center">
        <li>
          <Button onClick={toggleDrawer('right', true)}>
            mm
          </Button>
          <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
        </li>
      </ul>
      <div className="flex flex-row text-gray-700 justify-center items-center rounded-lg font-bold hover:text-gray-900">
        <img src="./Logo_1.png" alt="Logo" className="h-12" />
        <NavLink to="/">Anti-Corruptō</NavLink>
      </div>

      <ul className="hidden md:flex px-4 flex-row justify-end space-x-8 items-center">
        <li className="hover:text-blue-600">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:text-blue-600">
          <NavLink to="/features">Features</NavLink>
        </li>
        <li className="hover:text-blue-600">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="hover:text-blue-600">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {isLoggedd ? (
          <li>
            <Button onClick={handleLogout}>Logout</Button>
          </li>
        ) : (
          <li>
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          </li>
        )}
      </ul>

    </div>
  );
}

export default HeaderHome;
