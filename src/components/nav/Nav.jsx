import React from "react";
import logo from "./online_quiz.png";
const Nav = () => {
  return (
    <div className="flex items-center justify-between py-4 bg-white w-full shadow-md">
      <div className="px-4 md:px-8 lg:px-16">
        <h1 className="text-xl font-semibold">
          {<img src={logo} alt="Online Quiz Logo" className="h-8 w-auto" />}
        </h1>
      </div>
    </div>
  );
};

export default Nav;
