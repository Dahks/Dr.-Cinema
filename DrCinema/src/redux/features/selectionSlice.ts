import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import type { Cinema } from "../../models/Cinema";
import type { Movie, UpcomingMovie } from "../../models/Movie";

interface SelectionState {
  movie?: Movie | UpcomingMovie;
  cinema?: Cinema;
}

const initialState: SelectionState = {
  movie: undefined,
  cinema: undefined,
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<Movie | UpcomingMovie>) => {
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

export const selectMovie = (state: RootState) => state.selection.movie;
export const selectCinema = (state: RootState) => state.selection.cinema;

export default selectionSlice.reducer;
