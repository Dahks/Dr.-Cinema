import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
// import cinemaReducer from "./features/counter/cinemaSlice";
import authReducer from "./features/counter/authSlice";
import { cinemasApi } from "../services/cinemas";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // cinema: cinemaReducer,
    auth: authReducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    /*
    authenticationState: authenticationReducer,
    cinemaList: cinemaListReducer,
    selectedCinema: cinemaReducer,
    movieList: movieListReducer,
    selectedMovie: movieReducer,
    upcomingList: upcomingListReducer,
    upcoming: upcomingReducer,
    */

    /*
    uiState: UIReducer,    
    */
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cinemasApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
