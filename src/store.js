import { configureStore } from "@reduxjs/toolkit";

import gemgenaiReducer from "./features/gemgenai/gemgenaiSlice";
import quizReducer from "./features/quiz/quizSlice";
const store = configureStore({
  reducer: {
    quiz: quizReducer,
    gemgenai: gemgenaiReducer,
  },
});

export default store;
