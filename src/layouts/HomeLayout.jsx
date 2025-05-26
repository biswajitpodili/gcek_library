import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
