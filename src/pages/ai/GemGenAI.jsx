import React from "react";
import BackButton from "../../components/back_button/BackButton";
import whaticon from "../../assets/whaticon.svg";
import {
  toggleHelp,
  selectGemGenAI,
  fetchGemGenAIData,
} from "../../features/gemgenai/gemgenaiSlice";
import { useSelector, useDispatch } from "react-redux";
import {} from "../../features/gemgenai/gemgenaiSlice";
import { div } from "framer-motion/client";
import Loading from "../../components/loading/Loading";

const GemGenAI = () => {
  const { showHelp, isPending, error, aiquestions, fulfilled } =
    useSelector(selectGemGenAI);

  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col  w-full h-full justify-center items-center min-h-screen"
      onClick={() => {
        if (showHelp) {
          dispatch(toggleHelp());
        }
      }}
    >
      <BackButton />

      {isPending ? (
        <Loading />
      ) : fulfilled ? (
        <p className="text-lg text-green-600 mt-4">
          Quiz generated! Check your quiz list.
          {aiquestions.map((q, i) => {
            return <div key={i}>{q.question}</div>;
          })}
        </p>
      ) : (
        <form
          action=""
          className="flex flex-col gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <label htmlFor="prompt">Your category</label>

          <div className="flex items-start gap-2">
            <input
              type="text"
              id="prompt"
              name="prompt"
              className="border border-gray-300 rounded-lg px-3 py-2"
            />

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
                  Choose difficulty level, choose number of questions Then click{" "}
                  <strong>Go</strong>.
                </p>
              </div>
            </div>
          </div>

          <label htmlFor="difficulty">Difficulty Level</label>
          <select
            id="difficulty"
            name="difficulty"
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>

          <label htmlFor="numofquestions">Number of questions</label>
          <input
            type="number"
            id="numofquestions"
            name="numofquestions"
            min="1"
            max="5"
            className="border border-gray-300 rounded-lg px-3 py-2"
            placeholder=" (5 max)"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
            onClick={() =>
              dispatch(
                fetchGemGenAIData(
                  document.getElementById("prompt").value,
                  document.getElementById("difficulty").value,
                  document.getElementById("numofquestions").value,
                ),
              )
            }
          >
            go
          </button>
        </form>
      )}
    </div>
  );
};

export default GemGenAI;
