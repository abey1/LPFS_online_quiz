import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../../components/nav/Nav";
const Root = () => {
  return (
    <>
      <Nav />
      <div className="px-4 md:px-8 lg:px-16 border min-h-screen">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
