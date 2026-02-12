import { createSlice, isPending } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchGemGenAIData = createAsyncThunk(
  "gemgenai/fetchGemGenAIData",
  async (category) => {
    fetch("/api/gemgenai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: category,
        difficulty: "easy",
        count: 5,
      }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        console.error("Error fetching GemGenAI data:", error);
        throw error;
      });
  },
);

const GemGenAISlice = createSlice({
  name: "gemgenai",
  initialState: {
    showHelp: false,
    isPending: false,
    error: null,
    aiquestions: [],
  },
  reducers: {
    toggleHelp: (state) => {
      state.showHelp = !state.showHelp;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGemGenAIData.pending, (state) => {
      state.isPending = true;
      state.error = null;
    });
    builder.addCase(fetchGemGenAIData.fulfilled, (state, action) => {
      state.isPending = false;
      state.error = null;
      state.aiquestions = action.payload.questions;
    });
    builder.addCase(fetchGemGenAIData.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.error.message;
    });
  },
});

export const { toggleHelp } = GemGenAISlice.actions;
export const selectGemGenAI = (state) => state.gemgenai;
export const gemgenaiSelector = (state) => state.gemgenai;
export { fetchGemGenAIData };
export default GemGenAISlice.reducer;
