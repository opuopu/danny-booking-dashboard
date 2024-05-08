/* eslint-disable @typescript-eslint/no-explicit-any */
import { TResponseRedux } from "../../../types";
import { tagTypes } from "../../../types/tagTypes";
import { baseApi } from "../../api/baseApi";

const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sentVendorAmount: builder.mutation({
      query: (data) => ({
        url: `/wallet/${data?.id}`,
        method: "POST",
        params: data?.body,
      }),
      invalidatesTags: [tagTypes.wallet],
    }),
    getVendorWalletDetails: builder.query({
      query: (query) => ({
        url: "/wallet",
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.wallet],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
  }),
});

export const { useSentVendorAmountMutation, useGetVendorWalletDetailsQuery } =
  walletApi;
