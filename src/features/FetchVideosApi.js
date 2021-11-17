import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../ApiConfig";

export const fetchVideosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getAllVideos: builder.query({
      query: () =>
        `youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet,id&order=date&maxResults=100`,
    }),
  }),
});
export const { useGetAllVideosQuery } = fetchVideosApi;
