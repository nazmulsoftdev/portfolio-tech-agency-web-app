import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://goditect-server.onrender.com" }),
  endpoints: (builder) => ({
    postAppointmentRequest: builder.mutation({
      query: (data) => ({
        url: "/AppointmentRequest",
        method: "POST",
        body: data,
      }),
    }),
    postContactMessage: builder.mutation({
      query: (data) => ({
        url: "/contactMessage",
        method: "POST",
        body: data,
      }),
    }),
    postSubscribeEmail: builder.mutation({
      query: (data) => ({
        url: "/subscribeEmail",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  usePostAppointmentRequestMutation,
  usePostContactMessageMutation,
  usePostSubscribeEmailMutation,
} = apiSlice;
