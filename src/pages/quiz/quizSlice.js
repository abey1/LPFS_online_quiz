import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.js";
const QuizSlice = createSlice({
  name: "quiz",
  initialState: {
    current: 0,
    direction: 0,
    quizData: {},
  },
  reducers: {
    initializeQuizData: (state, action) => {
      const { categoryId, quizId } = action.payload;
      const rawData = data[categoryId].quizzes[quizId];
      const formattedData = rawData.map((item) => ({
        ...item,
        answer: item.choices[0],
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
  },
});
export const { initializeQuizData, setCurrent, setDirection } =
  QuizSlice.actions;
export const selectQuizData = (state) => state.quiz;
export default QuizSlice.reducer;
