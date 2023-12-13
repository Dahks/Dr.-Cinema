import {
  type PayloadAction,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { toCinema, type APICinema, type Cinema } from "../../../models/Cinema";

interface CinemaState {
  cinemas: Cinema[];
  cinemasIsLoading: boolean;
  cinemasHasError: boolean;
}

const initialState: CinemaState = {
  cinemas: [],
  cinemasIsLoading: true,
  cinemasHasError: false,
};

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCinemasFromAPI.pending, (state) => {
        state.cinemasHasError = false;
        state.cinemasIsLoading = true;
      })
      .addCase(
        getCinemasFromAPI.fulfilled,
        (state, action: PayloadAction<Cinema[]>) => {
          state.cinemas = action.payload;
          state.cinemasHasError = false;
          state.cinemasIsLoading = false;
        }
      )
      .addCase(getCinemasFromAPI.rejected, (state, action) => {
        state.cinemasHasError = true;
        state.cinemasIsLoading = false;
      });
  },
});

export const getCinemasFromAPI = createAsyncThunk<Cinema[], string>(
  "cinemas/getCinemasFromAPI",
  async (token: string) => {
    const response = await fetch("https://api.kvikmyndir.is/theaters", {
      method: "GET",
      headers: {
        "x-access-token": `${token}`,
      },
    });
    const data: APICinema[] = await response.json();
    return data.map(toCinema);
  }
);

export default cinemaSlice.reducer;
