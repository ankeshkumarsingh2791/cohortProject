import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./utils/Footer"


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <NavBar/>
      <div className="flex-grow ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
