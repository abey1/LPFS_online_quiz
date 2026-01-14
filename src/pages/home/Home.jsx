import React from "react";
import logo from "../../components/nav/online_quiz.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex  w-full h-full justify-center items-center min-h-screen">
      <div>
        <img
          src={logo}
          alt="Online Quiz Logo"
          className="h-32 w-auto mx-auto"
        />
        <h1 className="text-4xl font-bold text-center mt-4">
          Welcome to Online Quiz
        </h1>
        <p className="text-center mt-2 text-lg">
          Challenge your knowledge with our exciting quizzes. Explore various
          topics and test your skills!
        </p>
        <div className="flex justify-center mt-6">
          <Link to="/categories">
            <button className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer">
              Start Quiz
            </button>
          </Link>
          <Link to="/howto">
            <button className="ml-4 p-4 bg-gray-500 text-white rounded hover:bg-gray-600 hover:cursor-pointer">
              How it works
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
