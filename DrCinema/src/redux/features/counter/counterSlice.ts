import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementCounter: (state) => {
      state.value += 1;
    },
  },
});

export const { incrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
