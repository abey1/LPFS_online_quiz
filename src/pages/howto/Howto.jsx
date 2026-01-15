import { Link } from "react-router-dom";
const Howto = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8  min-h-screen">
      <div className="flex flex-col w-full md:w-100 lg:w-150">
        {/* Content */}
        <div>
          <h1 className="text-2xl font-bold text-center mb-2">How It Works</h1>

          <p className="text-center text-gray-600 mb-8">
            Before you start the quiz, here’s what you need to know:
          </p>
          <div className="flex items-center justify-center mb-8">
            <div>
              {/* Step 1 */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
                  ▶️
                </div>
                <div>
                  <h3 className="font-semibold">Step 1: Select a Quiz</h3>
                  <p className="text-gray-600">
                    Choose from various topics to test your knowledge.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
                  ✏️
                </div>
                <div>
                  <h3 className="font-semibold">Step 2: Answer Questions</h3>
                  <p className="text-gray-600">
                    Each quiz consists of multiple-choice questions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200">
                  📊
                </div>
                <div>
                  <h3 className="font-semibold">Step 3: View Scores</h3>
                  <p className="text-gray-600">
                    Your scores are calculated based on correct answers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mt-10">
          <Link to="/">
            <button className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer">
              Back
            </button>
          </Link>
          <Link to="/categories">
            <button className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer">
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Howto;
