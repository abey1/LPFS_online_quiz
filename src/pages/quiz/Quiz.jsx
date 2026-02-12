import QuitButton from "../../components/quit_button/QuitButton";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Question from "../../components/question/Question";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrent,
  setDirection,
  initializeQuizData,
  selectQuizData,
} from "../../features/quiz/quizSlice.js";
import { setFulfilledToFalse } from "../../features/gemgenai/gemgenaiSlice.js";
const Quiz = (source = "local") => {
  const dispatch = useDispatch();

  // if (source === "local") {
  // fetch quiz data from AI endpoint based on topic
  // dispatch(initializeQuizData({ categoryId: "ai", quizId: topic }));
  //   const { categoryId, quizId } = useParams();
  //   dispatch(initializeQuizData({ categoryId, quizId }));
  // }

  // const quizData = data[categoryId].quizzes[quizId];
  const { current, direction, quizData } = useSelector(selectQuizData);
  // 1 for next, -1 for previous

  // Load quiz data (ONLY for local route)
  const { categoryId, quizId } = useParams();
  console.log("categoryId:", categoryId, "quizId:", quizId);
  // dispatch(initializeQuizData({ categoryId, quizId }));
  useEffect(() => {
    console.log("before initializing quiz source = ", source.source);
    if (source.source === "local") {
      console.log(
        "Initializing quiz data for categoryId:",
        categoryId,
        "quizId:",
        quizId,
      );
      dispatch(initializeQuizData({ categoryId, quizId }));
    }
  }, [source, categoryId, quizId, dispatch]);

  useEffect(() => {
    // Load quiz data based on categoryId and quizId
    // dispatch(setFulfilledToFalse());
    dispatch(setDirection(0));
    dispatch(setCurrent(0));
  }, [dispatch]);

  const nextQuestion = () => {
    if (current < quizData.length - 1) {
      dispatch(setDirection(1));
      dispatch(setCurrent(current + 1));
    }
  };

  const prevQuestion = () => {
    if (current > 0) {
      dispatch(setDirection(-1));
      dispatch(setCurrent(current - 1));
    }
  };
  const allQuestionsAnswered = Object.values(quizData).every(
    (q) => q.choice !== null,
  );
  console.log("Current quiz data in Quiz component:", quizData);
  return (
    <>
      <QuitButton />
      <div className="flex justify-center items-start px-4 py-8 mt-8 min-h-screen">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 md:w-100 lg:w-150">
          {/* Progress */}
          <div className="mb-4 text-sm text-gray-500">
            Question {current + 1} of {quizData.length}
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-md overflow-hidden ">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={quizData[current]?.id}
                  custom={direction}
                  initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full"
                >
                  <Question {...quizData[current]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              disabled={current === 0}
              onClick={prevQuestion}
            >
              Previous
            </button>
            {current < quizData.length - 1 ? (
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                disabled={current === quizData.length - 1}
                onClick={nextQuestion}
              >
                Next
              </button>
            ) : (
              <Link to="/results" replace={true}>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                  disabled={!allQuestionsAnswered}
                >
                  finish
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
