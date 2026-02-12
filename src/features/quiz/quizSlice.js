import { createSlice } from "@reduxjs/toolkit";
import { prepareQuizData } from "../../utils/quizUtils.js";

const QuizSlice = createSlice({
  name: "quiz",
  initialState: {
    current: 0,
    direction: 0,
    categoryId: null,
    quizId: null,
    quizData: [],
  },
  reducers: {
    initializeQuizData: (state, action) => {
      const { categoryId, quizId } = action.payload;
      state.categoryId = categoryId;
      state.quizId = quizId;
      state.quizData = prepareQuizData(categoryId, quizId, null);
    },
    initializeQuizDataAi: (state, action) => {
      const { aiQuizData } = action.payload;
      state.quizData = prepareQuizData(null, null, aiQuizData);
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setUserChoice: (state, action) => {
      state.quizData[state.current].choice = action.payload;
    },
  },
});
export const {
  initializeQuizData,
  initializeQuizDataAi,
  setCurrent,
  setDirection,
  setUserChoice,
} = QuizSlice.actions;
export const selectQuizData = (state) => state.quiz;
export const selectIsQuizEmpty = (state) => state.quiz.quizData.length === 0;
export default QuizSlice.reducer;
