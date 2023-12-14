import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
// import cinemaReducer from "./features/counter/cinemaSlice";
import authReducer from "./features/counter/authSlice";
import { cinemasApi } from "../services/cinemas";
import { moviesApi } from "../services/movies";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // cinema: cinemaReducer,
    auth: authReducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    /*
    uiState: UIReducer,    
    */
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cinemasApi.middleware)
      .concat(moviesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
