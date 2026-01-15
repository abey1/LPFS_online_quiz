import BackButton from "../../components/back_button/BackButton";
import { selectQuizData } from "../../features/quiz/quizSlice.js";
import { useSelector } from "react-redux";
import SingleResult from "../../components/single_result/SingleResult.jsx";
import { useNavigate } from "react-router-dom";
const Results = () => {
  const navigate = useNavigate();
  const { quizData, categoryId, quizId } = useSelector(selectQuizData);
  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question) => {
      if (question.choice === question.answer) {
        score += 1;
      }
    });
    return score;
  };
  const score = calculateScore();
  function getColorFromPercentage(percent) {
    // Clamp value between 0 and 100
    const p = Math.max(0, Math.min(100, percent));

    let r,
      g,
      b = 0;

    if (p <= 50) {
      // Red → Yellow
      r = 255;
      g = Math.round((p / 50) * 255);
    } else {
      // Yellow → Green
      r = Math.round(255 - ((p - 50) / 50) * 255);
      g = 255;
    }
    return `rgb(${r}, ${g}, ${b})`;
  }
  const color = getColorFromPercentage((score / quizData.length) * 100);
  const handleRetakeQuiz = () => {
    // Logic to retake the quiz can be added here
    navigate(`/category/${categoryId}/quiz/${quizId}`, {
      replace: true,
    });
  };
  return (
    <div className="flex flex-col justify-center items-center px-4 py-8  min-h-screen">
      <div className="flex  items-center justify-between w-full max-w-xl mb-6 px-2">
        <BackButton />
        <button
          className="px-4 w-50 h-10 capitalize py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          onClick={handleRetakeQuiz}
        >
          retake quiz
        </button>
      </div>

      <h1 className="text-xl font-bold text-center">Results</h1>
      <p className={`text-4xl font-bold  my-4`} style={{ color }}>
        Your score: {score} / {quizData.length}
      </p>
      {quizData.map((question, index) => (
        <SingleResult key={question.id} props={{ ...question, index }} />
      ))}
    </div>
  );
};

export default Results;
