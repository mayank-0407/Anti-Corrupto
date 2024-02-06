import React, { useState, useEffect, useLocation } from "react";
import { isLogin, logOut } from "../Utils/cookieSetup";
import { Carousell } from "../Components/Carousell";
import { Updates } from "../Components/Updates";
import Services from "../Components/Services";
import Header from "../Components/Navbar";
import { Link, useNavigate, useParams, NavLink } from "react-router-dom";
import { logoutUser, fetchUserDetails, isSessionValid } from "../Utils/authAPI";

function Home() {
  const [isLoggedd, setisLoggedd] = useState(false);
  const navigate = useNavigate();
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
    <>
      <Header />
      <Carousell />
      <Updates />
      <Services />
      <h1>wow</h1>
    </>
  );
}

export default Home;
