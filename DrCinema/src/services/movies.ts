import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type RootState } from "../redux/store";
import {
  type APIMovie,
  type Movie,
  toMovie,
  type UpcomingMovie,
  type APIUpcomingMovie,
  toUpcomingMovie,
  sortUpcomingMovies,
} from "../models/Movie";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kvikmyndir.is",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (token) {
        headers.set("x-access-token", token);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUpcomingMovies: builder.query<UpcomingMovie[], void>({
      query: () => "/upcoming",
      transformResponse: (response: APIUpcomingMovie[]): UpcomingMovie[] =>
        response.map(toUpcomingMovie).sort(sortUpcomingMovies),
    }),
    getMovies: builder.query<Movie[], void>({
      query: () => "/movies",
      transformResponse: (response: APIMovie[]): Movie[] =>
        response.map(toMovie),
    }),
  }),
});

export const { useGetUpcomingMoviesQuery, useGetMoviesQuery } = moviesApi;
