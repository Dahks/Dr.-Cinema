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
    decremenetCounter: (state) => {
      state.value -= 1;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementCounter, decremenetCounter, resetCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
