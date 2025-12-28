import React from "react";

const Question = ({ question, choices }) => {
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
          >
            <input
              type="radio"
              name="answer"
              value={option}
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
