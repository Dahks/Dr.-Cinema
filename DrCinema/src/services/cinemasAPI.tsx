import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cinemasApi = createApi({
  reducerPath: "cinemasApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.kvikmyndir.is/" }),
  endpoints: (builder) => ({
    getCinemas: builder.query({
      query: () => "theaters",
    }),
  }),
});

export const { useGetCinemasQuery } = cinemasApi;
