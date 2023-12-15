import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../../store";
import type { Cinema } from "../../../models/Cinema";
import type { Movie } from "../../../models/Movie";

interface SelectionState {
  movie?: Movie;
  cinema?: Cinema;
}

// IMPORT TYPES FOR MOVIE / CINEMA
const initialState: SelectionState = {
  movie: undefined,
  cinema: undefined,
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<Movie>) => {
      state.movie = action.payload;
    },
    deselectMovie: (state) => {
      state.movie = undefined;
    },
    setSelectedCinema: (state, action: PayloadAction<Cinema>) => {
      state.cinema = action.payload;
    },
    deselectCinema: (state) => {
      state.cinema = undefined;
    },
  },
});

export const {
  setSelectedMovie,
  deselectMovie,
  setSelectedCinema,
  deselectCinema,
} = selectionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMovie = (state: RootState) => state.selection.movie;
export const selectCinema = (state: RootState) => state.selection.cinema;

export default selectionSlice.reducer;
