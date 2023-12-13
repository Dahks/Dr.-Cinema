import { type PayloadAction, createSlice, Dispatch } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "../../store";
import { toCinema, type APICinema, type Cinema } from "../../../models/Cinema";
import { useAppSelector } from "../../hooks";

interface CinemaState {
  cinemas: Cinema[];
  cinemasIsLoading: boolean;
  cinemasError: Error | undefined;
}

const initialState: CinemaState = {
  cinemas: [],
  cinemasIsLoading: true,
  cinemasError: undefined,
};

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {
    setCinemas: (state, action: PayloadAction<Cinema[]>) => {
      state.cinemas = action.payload;
      state.cinemasError = undefined;
      state.cinemasIsLoading = false;
    },
    addCinema: (state, action: PayloadAction<Cinema>) => {
      state.cinemas.push(action.payload);
      //   state.cinemasError = undefined;
      //   state.cinemasIsLoading = false;
    },
    removeCinemaById: (state, action: PayloadAction<string>) => {
      state.cinemas = state.cinemas.filter((c) => c.id !== action.payload);
      //   state.cinemasError = undefined;
      //   state.cinemasIsLoading = false;
    },

    getCinemasLoading: (state) => {
      state.cinemasIsLoading = true;
    },
  },
});

export const getCinemasFromAPI = (token) => {
  return async (dispatch: AppDispatch) => {
    dispatch(getCinemasLoading());
    fetch("https://api.kvikmyndir.is/theaters", {
      method: "GET",
      headers: {
        "x-access-token": `${token}`,
      },
    })
      .then(async (response) => {
        if (!response.ok) throw Error("response is not ok");
        return response.json();
      })
      .then((data: APICinema[]) => {
        dispatch(setCinemas(data.map((d) => toCinema(d))));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const { setCinemas, addCinema, removeCinemaById, getCinemasLoading } =
  cinemaSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCinemas = (state: RootState) => state.cinema.cinemas;

export default cinemaSlice.reducer;
