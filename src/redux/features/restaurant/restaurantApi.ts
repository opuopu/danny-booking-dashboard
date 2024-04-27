/* eslint-disable @typescript-eslint/no-explicit-any */
import { tagTypes } from "../../../types/tagTypes";
import { baseApi } from "../../api/baseApi";

const restaurantsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addRestaurant: builder.mutation({
      query: (data) => ({
        url: "/restaurants",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tagTypes.restaurant],
    }),
    getAllRestaurants: builder.query({
      query: (data) => ({
        url: "/restaurants",
        method: "GET",
        body: data,
      }),
      providesTags: [tagTypes.restaurant],
    }),
  }),
});

export const { useAddRestaurantMutation, useGetAllRestaurantsQuery } =
  restaurantsApi;
