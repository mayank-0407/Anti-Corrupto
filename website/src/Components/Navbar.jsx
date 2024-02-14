import React, { useState, useEffect, useLocation } from "react";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import { logoutUser, fetchUserDetails, isSessionValid } from "../Utils/authAPI";
import { isLogin, logOut } from "../Utils/cookieSetup";
import cookie from "js-cookie";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Avatar } from "./Avatar";

const navListMenuItems = [
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
    ids: "#S",
  },

  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "Updates",
    description: "know about latest updates.",
    icon: NewspaperIcon,
    ids: "#Up",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, ids }, key) => (
      <button
        onClick={() => {
          const sec = document.querySelector(ids || "#");
          sec?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <a key={key}>
          <MenuItem className="flex items-center gap-3 rounded-lg">
            <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
              {" "}
              {React.createElement(icon, {
                strokeWidth: 2,
                className: "h-6 text-gray-900 w-6",
              })}
            </div>
            <div>
              <Typography
                variant="h6"
                color="blue-gray"
                className="flex items-center text-sm font-bold"
              >
                {title}
              </Typography>
              <Typography
                variant="paragraph"
                className="text-xs !font-medium text-blue-gray-500"
              >
                {description}
              </Typography>
            </div>
          </MenuItem>
        </a>
      </button>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink to={"/"}>
        <Typography
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Typography>
      </NavLink>
      <Link to={"/"}>
        <NavListMenu />
      </Link>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <Avatar />
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);
  const [isLoggedd, setisLoggedd] = React.useState(false);

  const handleLogout = async () => {
    logOut();
    setisLoggedd(false);
    navigate("/");
  };

  useEffect(() => {
    const checkLoginSession = isLogin();
    if (checkLoginSession) {
      setisLoggedd(true);
    } else {
      setisLoggedd(false);
    }

    // console.log(isLoggedd);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="sticky z-50 top-0">
      <Navbar className="mx-auto ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/dashboard">
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 lg:ml-2 font-bold text-lg "
            >
              Anti Corrupt-ō
            </Typography>
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          {isLoggedd ? (
            <NavLink className="hidden gap-2 lg:flex">
              <Button onClick={handleLogout} variant="gradient" size="sm">
                Logout
              </Button>
            </NavLink>
          ) : (
            <NavLink className="hidden gap-2 lg:flex">
              <Link to="/login">
                <Button variant="text" href="" size="sm" color="blue-gray">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button href="/signup" variant="gradient" size="sm">
                  Sign Up
                </Button>
              </Link>
            </NavLink>
          )}

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Link to="/login">
              <Button
                variant="outlined"
                to={"/login"}
                size="sm"
                color="blue-gray"
                fullWidth
              >
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="gradient" to={"/signup"} size="sm" fullWidth>
                Sign Up
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
