import { createSlice, isPending } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchGemGenAIData = createAsyncThunk(
  "gemgenai/fetchGemGenAIData",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const { topic, difficulty, count } = state.gemgenai;

    const result = await fetch(
      "https://lpfs-online-quiz-backend.onrender.com/generate-quiz",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: topic,
          difficulty: difficulty,
          count: count,
        }),
      },
    );

    const data = await result.json();

    if (!result.ok) {
      throw new Error("Failed to fetch GemGenAI data");
    }

    return data;
  },
);

const GemGenAISlice = createSlice({
  name: "gemgenai",
  initialState: {
    showHelp: false,
    isPending: false,
    fulfilled: false,
    error: null,
    aiquestions: [],
    topic: "",
    difficulty: "easy",
    count: 5,
  },
  reducers: {
    toggleHelp: (state) => {
      state.showHelp = !state.showHelp;
    },
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setFulfilledToFalse: (state) => {
      state.fulfilled = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGemGenAIData.pending, (state) => {
      state.isPending = true;
      state.error = null;
      state.fulfilled = false;
    });
    builder.addCase(fetchGemGenAIData.fulfilled, (state, action) => {
      state.isPending = false;
      state.error = null;
      state.fulfilled = true;
      state.aiquestions = action.payload["questions"];
    });
    builder.addCase(fetchGemGenAIData.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.error.message;
      state.fulfilled = false;
    });
  },
});

export const {
  toggleHelp,
  setTopic,
  setCount,
  setDifficulty,
  setFulfilledToFalse,
} = GemGenAISlice.actions;
export const selectGemGenAI = (state) => state.gemgenai;
export { fetchGemGenAIData };
export default GemGenAISlice.reducer;
