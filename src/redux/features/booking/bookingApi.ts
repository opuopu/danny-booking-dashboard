/* eslint-disable @typescript-eslint/no-explicit-any */

import { TResponseRedux } from "../../../types";
import { tagTypes } from "../../../types/tagTypes";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetAllBooking: builder.query({
      query: (query) => ({
        url: "/booking/",
        method: "GET",
        params: query,
      }),
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: [tagTypes.booking],
    }),
    FindAllBrancesBooking: builder.query({
      query: (query) => ({
        url: "/booking/all",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.booking],
    }),
    UpdateBooking: builder.mutation({
      query: (data) => ({
        url: `/booking/${data?.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.booking],
    }),
    GetBookingStatics: builder.query({
      query: (query) => ({
        url: `/booking/statics`,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.booking],
    }),
  }),
});

export const {
  useGetAllBookingQuery,
  useUpdateBookingMutation,
  useGetBookingStaticsQuery,
  useFindAllBrancesBookingQuery,
} = bookingApi;
