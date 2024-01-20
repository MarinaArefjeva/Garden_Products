// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getProducts = createAsyncThunk(
//   "products/getProducts",
//   async (_, thunkApi) => {
//     try {
//       const result = await axios("http://localhost:3333/products/all");
//       return result.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     products: [],
//     isLoading: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getProducts.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getProducts.fulfilled, (state, { payload }) => {
//       state.products = payload;
//       state.isLoading = false;
//     });
//     builder.addCase(getProducts.rejected, (state) => {
//       state.isLoading = false;
//     });
//   },
// });

// export default productsSlice.reducer;
