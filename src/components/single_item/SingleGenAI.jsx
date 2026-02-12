import React from "react";
import { Link } from "react-router-dom";
import gemini_logo from "../../assets/gemini_logo.svg";
const SingleGenAI = () => {
  return (
    <Link
      to={"/gemgenai"}
      className="flex shadow-md p-4 gap-6 rounded w-50 md:w-100 lg:w-150 font-semibold hover:scale-105 hover:cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out"
    >
      <div>
        <img src={gemini_logo} alt="Gemini Logo" />
      </div>
      <div>AI [create your own category]</div>
    </Link>
  );
};

export default SingleGenAI;
