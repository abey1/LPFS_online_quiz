import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.js";

const shuffleArray = (array) => {
  const arr = [...array]; // create a copy so original array is not modified
  for (let i = arr.length - 1; i > 0; i--) {
    // pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // swap arr[i] with arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const QuizSlice = createSlice({
  name: "quiz",
  initialState: {
    current: 0,
    direction: 0,
    categoryId: null,
    quizId: null,
    quizData: {},
  },
  reducers: {
    initializeQuizData: (state, action) => {
      const { categoryId, quizId } = action.payload;
      state.categoryId = categoryId;
      state.quizId = quizId;
      let rawData = data[categoryId].quizzes[quizId];
      rawData = shuffleArray(rawData);
      const formattedData = rawData.map((item) => ({
        ...item,
        answer: item.choices[0],
        choices: shuffleArray(item.choices),
        choice: null,
      }));
      state.quizData = formattedData;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setUserChoice: (state, action) => {
      state.quizData[state.current].choice = action.payload;
      console.log(state.quizData);
    },
  },
});
export const { initializeQuizData, setCurrent, setDirection, setUserChoice } =
  QuizSlice.actions;
export const selectQuizData = (state) => state.quiz;
export default QuizSlice.reducer;
