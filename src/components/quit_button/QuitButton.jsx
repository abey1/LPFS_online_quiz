import React from "react";
import { useNavigate } from "react-router-dom";
const QuitButton = () => {
  const navigate = useNavigate();
  const handleQuit = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="w-50 md:w-100 lg:w-150 py-4">
      <button className=" p-4 ">
        <span
          onClick={handleQuit}
          className="text-2xl hover:cursor-pointer hover:text-blue-500 transition-all duration-200 ease-in-out"
        >
          &larr; Quit
        </span>
      </button>
    </div>
  );
};

export default QuitButton;
