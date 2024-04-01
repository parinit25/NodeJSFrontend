"use client";
import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProductsAction,
  getProductAction,
} from "../asyncActions/productAsyncAction";
const initialState = {
  products: [],
  productDetail: null,
};
const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductsAction.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductAction.fulfilled, (state, action) => {
      state.productDetail = action.payload;
    });
  },
});
export const product = productSlice.reducer;
export const selectProducts = (state) => state.product.products;
export const selectProductDetail = (state) => state.product.productDetail;
