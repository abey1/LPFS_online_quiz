import React from "react";
import { Link } from "react-router-dom";
const SingleQuiz = ({ props }) => {
  const { categoryId, quizName } = props;
  return (
    <Link
      to={`/category/${categoryId}/quiz/${quizName}`}
      className="flex justify-center shadow-md p-4 gap-6 rounded w-50 md:w-100 lg:w-150 font-semibold hover:scale-105 hover:cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out"
    >
      <div>{quizName}</div>
    </Link>
  );
};

export default SingleQuiz;
