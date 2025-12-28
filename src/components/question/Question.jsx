import React from "react";
import { setUserChoice } from "../../pages/quiz/quizSlice.js";
import { useDispatch } from "react-redux";
const Question = ({ question, choices, choice }) => {
  const dispatch = useDispatch();
  return (
    <>
      {/* Question */}
      <h2 className="mb-6 text-lg font-semibold text-gray-900">{question}</h2>

      {/* Options */}
      <div className="space-y-3">
        {choices?.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
            onClick={() => dispatch(setUserChoice(option))}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={choice === option}
              className="h-4 w-4"
            />
            <span className="text-gray-800">{option}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Question;
