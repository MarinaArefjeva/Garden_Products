// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getCategory = createAsyncThunk(
//   "category/getCategory",
//   async (_, thunkApi) => {
//     try {
//       const result = await axios("http://localhost:3333/categories/1");
//       return result.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// const toolsSlice = createSlice({
//   name: "tools",
//   initialState: {
//     tools: [],
//     isLoading: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getTools.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getTools.fulfilled, (state, { payload }) => {
//       state.tools = payload;
//       state.isLoading = false;
//     });
//     builder.addCase(getTools.rejected, (state) => {
//       state.isLoading = false;
//     });
//   },
// });

// export default toolsSlice.reducer;
