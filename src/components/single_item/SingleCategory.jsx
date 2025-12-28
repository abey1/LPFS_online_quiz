import React from "react";
import { Link } from "react-router-dom";
const SingleCategory = ({ prop }) => {
  const { icon, name, categoryKey } = prop;
  return (
    <Link
      to={`/LPFS_online_quiz/category/${categoryKey}`}
      className="flex shadow-md p-4 gap-6 rounded w-50 md:w-100 lg:w-150 font-semibold hover:scale-105 hover:cursor-pointer hover:bg-gray-100 transition-all duration-200 ease-in-out"
    >
      <div>{icon}</div>
      <div>{name}</div>
    </Link>
  );
};

export default SingleCategory;
