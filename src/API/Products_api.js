// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
      query: () => "categories/1",
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetToolsQuery,
} = productsApi;
