import React from "react";
import { Outlet } from "react-router-dom";
import SiteNavbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <SiteNavbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
