import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../../store";

interface SelectionState {
  movie: object;
  cinema: object;
}

// IMPORT TYPES FOR MOVIE / CINEMA
const initialState: SelectionState = {
  movie: {},
  cinema: {},
};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<object>) => {
      state.movie = action.payload;
    },
    deselectMovie: (state) => {
      state.movie = {};
    },
    setSelectedCinema: (state, action: PayloadAction<object>) => {
      state.cinema = action.payload;
    },
    deselectCinema: (state) => {
      state.cinema = {};
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
