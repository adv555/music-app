import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootObject } from '../../types/RootObject';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://shazam-core7.p.rapidapi.com',
    baseUrl: import.meta.env.VITE_RAPID_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
      );
      // headers.set('X-RapidAPI-Host', 'shazam-core7.p.rapidapi.com');
      headers.set('X-RapidAPI-Host', import.meta.env.VITE_RAPID_API_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<RootObject, void>({
      // query: () => '/charts/get-top-songs-in-world',
      query: () => '/charts/track',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
