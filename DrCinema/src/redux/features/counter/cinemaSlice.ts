import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../../store";
import type { Cinema } from "../../../models/Cinema";

interface CinemaState {
  cinemas: Cinema[];
}

const initialState: CinemaState = {
  cinemas: [],
};

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    setCinemas: (state, action: PayloadAction<Cinema[]>) => {
      state.cinemas = action.payload;
    },
    addCinema: (state, action: PayloadAction<Cinema>) => {
      state.cinemas.push(action.payload);
    },
    removeCinemaById: (state, action: PayloadAction<string>) => {
      state.cinemas = state.cinemas.filter((c) => c.id !== action.payload);
    },
  },
});

export const { setCinemas, addCinema, removeCinemaById } = cinemaSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCinemas = (state: RootState) => state.cinema.cinemas;

export default cinemaSlice.reducer;
