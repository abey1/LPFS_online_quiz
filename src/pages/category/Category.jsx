import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data";
import SingleQuiz from "../../components/single_item/SingleQuiz";
import BackButton from "../../components/back_button/BackButton";
const Category = () => {
  const { categoryId } = useParams();
  return (
    <div className="flex flex-col  w-full h-full justify-center items-center min-h-screen border">
      <BackButton />

      <h1 className="text-4xl font-bold">{data[categoryId].name}</h1>
      <hr className="my-4 " />
      {Object.keys(data[categoryId].quizzes).map((quizKey) => (
        <SingleQuiz key={quizKey} props={{ categoryId, quizName: quizKey }} />
      ))}
    </div>
  );
};

export default Category;
