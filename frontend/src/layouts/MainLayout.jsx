import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const MainLayout = ({ showNav }) => {
  return (
    <>
      {showNav && <Navbar />}

      <Outlet />
    </>
  );
};

export default MainLayout;
