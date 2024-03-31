"use client"
import { createSlice } from "@reduxjs/toolkit";
import { getAllProductsAction } from "../asyncActions/productAsyncAction";
const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export const product = productSlice.reducer;
export const selectProducts = (state) => state.product.products;
