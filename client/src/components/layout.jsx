import React from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      {/* Fixed Navbar */}
      

      {/* Spacer for fixed navbar */}
      {/* <div className="h-16"></div> */}

      {/* Main content */}
      <div className="flex-grow ">
        <Outlet />
      </div>

      
    </div>
  );
};

export default Layout;
