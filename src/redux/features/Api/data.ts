import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://assignment-6-server-side-kappa.vercel.app/",
    // baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getProductsById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    postProducts: builder.mutation({
      query: (productData) => {
        return {
          url: "/products",
          method: "POST",
          body: productData,
        };
      },
      invalidatesTags: ["products"],
    }),
    updateProducts: builder.mutation({
      query: ({ productData, id }) => {
        // console.log("product Data: ", productData);
        // console.log("product id: ", id);
        return {
          url: `/products/${id}`,
          method: "PATCH",
          body: productData,
        };
      },
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  usePostProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductMutation,
} = baseApi;
