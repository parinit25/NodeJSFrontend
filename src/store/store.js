"use client"
const { configureStore } = require("@reduxjs/toolkit");
const { product } = require("./reducer/productSlice");

const store = configureStore({
  reducer: {
    product: product,
  },
});

export default store;
