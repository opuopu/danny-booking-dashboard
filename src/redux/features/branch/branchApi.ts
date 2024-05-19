/* eslint-disable @typescript-eslint/no-explicit-any */

import { tagTypes } from "../../../types/tagTypes";
import { baseApi } from "../../api/baseApi";

const branchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    CreateBranch: builder.mutation({
      query: (data) => ({
        url: "/branch",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.branch],
    }),
    updateBranch: builder.mutation({
      query: (data) => ({
        url: `/branch/${data?.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.branch],
    }),
    getAllBranch: builder.query({
      query: (query) => ({
        url: `/branch`,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.branch],
    }),
    getSingleBranch: builder.query({
      query: (id: string) => ({
        url: `/branch/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.branch],
    }),
  }),
});

export const {
  useCreateBranchMutation,
  useGetAllBranchQuery,
  useUpdateBranchMutation,
  useGetSingleBranchQuery,
} = branchApi;
