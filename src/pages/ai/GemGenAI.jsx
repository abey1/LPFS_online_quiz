import React from "react";
import BackButton from "../../components/back_button/BackButton";
import whaticon from "../../assets/whaticon.svg";
import {
  toggleHelp,
  selectGemGenAI,
  fetchGemGenAIData,
  setTopic,
  setDifficulty,
  setCount,
  setFulfilledToFalse,
} from "../../features/gemgenai/gemgenaiSlice";
import { useSelector, useDispatch } from "react-redux";
import {} from "../../features/gemgenai/gemgenaiSlice";
import Loading from "../../components/loading/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  initializeQuizDataAi,
  selectIsQuizEmpty,
} from "../../features/quiz/quizSlice.js";
import { useEffect } from "react";
import { useRef } from "react";
import { ca } from "zod/locales";

//form validation schema
const schema = z.object({
  category: z.string().min(1, "Category is required"),
  numofquestions: z.coerce
    .number()
    .min(1, "At least 1 question")
    .max(5, "max 5 questions"),
});

const GemGenAI = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const categoryRegister = register("category");
  const { showHelp, isPending, error, aiquestions, fulfilled } =
    useSelector(selectGemGenAI);
  const quizDataEmpty = useSelector(selectIsQuizEmpty);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasMounted = useRef(false);

  // When fulfilled becomes true, then init quiz + navigate
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      dispatch(setFulfilledToFalse());
      return; // skip first render
    }

    if (!fulfilled) return;

    dispatch(initializeQuizDataAi({ aiQuizData: aiquestions }));

    navigate("/gemgenai/quiz", { replace: true }); // replace prevents back-button weirdness
  }, [fulfilled, aiquestions, dispatch, navigate]);

  return (
    <div
      onClick={() => {
        if (showHelp) {
          dispatch(toggleHelp());
        }
      }}
    >
      {isPending ? (
        <Loading />
      ) : (
        <div className="flex flex-col  w-full h-full justify-center items-center min-h-screen">
          <BackButton />
          <form
            action=""
            className="flex flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-2">
              <label htmlFor="category">Your category</label>
              <input
                {...categoryRegister}
                type="text"
                id="category"
                name="category"
                className="border border-gray-300 rounded-lg px-3 py-2"
                onChange={(e) => {
                  categoryRegister.onChange(e); // for react-hook-form state
                  dispatch(setTopic(e.target.value));
                }}
              />
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
              {/* Icon + popup anchor */}
              <div className="relative">
                <img
                  src={whaticon}
                  alt="What Icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(toggleHelp());
                  }}
                  className="w-6 h-6 hover:cursor-pointer select-none"
                />

                {/* Popup next to icon */}
                <div
                  className={`
             absolute top-full left-1/2 -translate-x-1/2 mt-2   

            md:left-full md:top-1/2 md:-translate-y-1/2 
            md:translate-x-0 md:mt-0 md:ml-2          

           bg-white border border-gray-200 shadow-lg rounded-lg p-3 w-64 z-10
             transition-all duration-200 ease-out
            ${
              showHelp
                ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-x-1 pointer-events-none"
            }
          `}
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm text-gray-700">
                    Enter a category like:
                    <br />
                    <br />
                    <ul>
                      <li>• Biology</li>
                      <li>• Chemistry</li>
                      <li>• Quantum physics</li>
                    </ul>
                    <br />
                    Choose difficulty level, choose number of questions Then
                    click <strong>Go</strong>.
                  </p>
                </div>
              </div>
            </div>

            <label htmlFor="difficulty">Difficulty Level</label>
            <select
              id="difficulty"
              name="difficulty"
              className="border border-gray-300 rounded-lg px-3 py-2"
              onChange={(e) => dispatch(setDifficulty(e.target.value))}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <label htmlFor="numofquestions">Number of questions</label>
            <input
              {...register("numofquestions", { valueAsNumber: true })}
              type="number"
              id="numofquestions"
              name="numofquestions"
              min="1"
              max="5"
              className="border border-gray-300 rounded-lg px-3 py-2"
              placeholder=" (5 max)"
              onChange={(e) => dispatch(setCount(e.target.value))}
            />
            {errors.numofquestions && (
              <p className="text-red-500 text-sm">
                {errors.numofquestions.message}
              </p>
            )}
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
              onClick={async () => {
                const ok = await trigger(); // runs zod validation for all fields
                if (!ok) return;

                dispatch(fetchGemGenAIData());
              }}
            >
              go
            </button>
            {!quizDataEmpty && (
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
                onClick={() => navigate("/gemgenai/quiz", { replace: true })}
              >
                take your last quiz
              </button>
            )}

            {
              error && (
                <p className="text-red-500 mt-2">
                  Error: {error}. Please try again.
                </p>
              ) /* ToDo: You might want to make this more user-friendly */
            }
          </form>
        </div>
      )}
    </div>
  );
};

export default GemGenAI;
