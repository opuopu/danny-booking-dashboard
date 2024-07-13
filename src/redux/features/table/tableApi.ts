/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../../../types/tagTypes";
import { baseApi } from "../../api/baseApi";

const tableApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTable: builder.mutation({
      query: (data) => ({
        url: "/tables",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.table],
    }),
    getTables: builder.query({
      query: (query) => ({
        url: `/tables`,
        method: "GET",
        params: query,
      }),
      providesTags: [tagTypes.table],
    }),
    getSingleTable: builder.query({
      query: (id: string) => ({
        url: `/tables/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.table],
    }),
    editTable: builder.mutation({
      query: (data) => ({
        url: `/tables/${data?.id}`,
        method: "PATCH",
        body: data?.body,
      }),
      invalidatesTags: [tagTypes.table],
    }),

    deleteTable: builder.mutation({
      query: (id) => {
        return {
          url: `/tables/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.table],
    }),
  }),
});

export const {
  useAddTableMutation,
  useGetSingleTableQuery,
  useGetTablesQuery,
  useEditTableMutation,
  useDeleteTableMutation,
} = tableApi;
