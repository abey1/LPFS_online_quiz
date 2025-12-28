import React from "react";

const SingleResult = ({ props }) => {
  const { question, answer, choice, index } = props;
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6 w-full md:w-3/4 mb-4">
      {choice === answer ? (
        <>
          {/* ✅ Correct Answer */}
          <div className="border rounded-lg p-4 bg-green-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Question {index + 1}</h3>
              <span className="text-green-600 font-bold">✅ Correct</span>
            </div>

            <p className="mb-2">
              <span className="font-medium">Question: </span>
              {question}
            </p>

            <p className="text-green-600">
              <span className="font-medium">Answer:</span> {answer}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* ❌ Incorrect Answer */}
          <div className="border rounded-lg p-4 bg-red-50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Question {index + 1}</h3>
              <span className="text-red-600 font-bold">❌ Incorrect</span>
            </div>

            <p className="mb-2">
              <span className="font-medium">Question:</span> {question}
            </p>

            <p className="text-red-600">
              <span className="font-medium">Your Answer:</span> {choice}
            </p>

            <p className="text-green-600">
              <span className="font-medium">Correct Answer:</span> {answer}
            </p>
          </div>
        </>
      )}
    </div>
    // <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
    //   <h2 className="text-xl font-bold text-center">Quiz Results</h2>

    //   {/* ❌ Incorrect Answer */}
    //   <div className="border rounded-lg p-4 bg-red-50">
    //     <div className="flex items-center justify-between mb-2">
    //       <h3 className="font-semibold">Question 1</h3>
    //       <span className="text-red-600 font-bold">❌ Incorrect</span>
    //     </div>

    //     <p className="mb-2">
    //       <span className="font-medium">Question:</span> What is the capital of
    //       France?
    //     </p>

    //     <p className="text-red-600">
    //       <span className="font-medium">Your Answer:</span> Berlin
    //     </p>

    //     <p className="text-green-600">
    //       <span className="font-medium">Correct Answer:</span> Paris
    //     </p>
    //   </div>

    //   {/* ✅ Correct Answer */}
    //   <div className="border rounded-lg p-4 bg-green-50">
    //     <div className="flex items-center justify-between mb-2">
    //       <h3 className="font-semibold">Question 2</h3>
    //       <span className="text-green-600 font-bold">✅ Correct</span>
    //     </div>

    //     <p className="mb-2">
    //       <span className="font-medium">Question:</span> What is 5 × 6?
    //     </p>

    //     <p className="text-green-600">
    //       <span className="font-medium">Answer:</span> 30
    //     </p>
    //   </div>
    // </div>
  );
};

export default SingleResult;
