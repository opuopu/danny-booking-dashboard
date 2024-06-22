/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../../../types/tagTypes";
import { baseApi } from "../../api/baseApi";

const notificationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyNotification: builder.query({
      query: (query) => ({
        url: `/notifications`,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.notification],
      // transformResponse: (response: TResponseRedux<any>) => {
      //   return {
      //     data: response?.data,
      //     meta: response?.meta,
      //   };
      // },
    }),
    markAsRead: builder.mutation({
      query: () => ({
        url: `/notifications`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.notification],
    }),
  }),
});

export const { useGetMyNotificationQuery, useMarkAsReadMutation } =
  notificationApi;
