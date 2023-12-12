import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
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
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
