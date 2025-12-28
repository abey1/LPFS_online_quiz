import React from "react";
import QuitButton from "../../components/quit_button/QuitButton";
const Quiz = () => {
  return (
    <>
      <QuitButton />
      <div className="flex justify-center items-center px-4 py-8 border min-h-screen">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 md:w-100 lg:w-150">
          {/* Progress */}
          <div className="mb-4 text-sm text-gray-500">Question 1 of 5</div>

          {/* Question */}
          <h2 className="mb-6 text-lg font-semibold text-gray-900">
            What is the capital of France?
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {["Paris", "Berlin", "Madrid", "Rome"].map((option, index) => (
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

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100"
            >
              Previous
            </button>

            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
