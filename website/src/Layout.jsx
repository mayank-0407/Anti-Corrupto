import React from "react";
import Header from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
