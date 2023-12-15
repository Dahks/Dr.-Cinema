import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { cinemasApi } from "../services/cinemas";
import { moviesApi } from "../services/movies";
import selectionSlice from "./features/selectionSlice";

const store = configureStore({
  reducer: {
    selection: selectionSlice,
    auth: authReducer,
    [cinemasApi.reducerPath]: cinemasApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cinemasApi.middleware)
      .concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
