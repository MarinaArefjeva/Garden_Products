import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "./api";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products/all",
    }),
    getCategories: builder.query({
      query: () => "categories/all",
    }),
    getTools: builder.query({
      query: (id) => `categories/${id}`,
    }),

    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),

    getItem: builder.query({
      query: () => "products/2",
    }),

    sendDiscount: builder.mutation({
      query: (body) => ({
        url: "sale/send",
        method: "POST",
        body,
      }),
    }),

    sendProduct: builder.mutation({
      query: (body) => ({
        url: "order/send ",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetToolsQuery,
  useGetProductQuery,
  useGetItemQuery,
} = productsApi;
