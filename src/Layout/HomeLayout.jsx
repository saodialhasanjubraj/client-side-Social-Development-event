import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer";

const HomeLayout = () => {
  return (
    <div className="w-full max-w-300 mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
