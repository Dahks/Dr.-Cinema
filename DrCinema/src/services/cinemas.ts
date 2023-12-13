import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type RootState } from "../redux/store";
import { type APICinema, toCinema, type Cinema } from "../models/Cinema";

export const cinemasApi = createApi({
  reducerPath: "cinemasApi",
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
    getCinemas: builder.query<Cinema[], void>({
      query: () => "/theaters",
      transformResponse: (response: APICinema[]): Cinema[] =>
        response.map(toCinema),
    }),
  }),
});

export const { useGetCinemasQuery } = cinemasApi;
