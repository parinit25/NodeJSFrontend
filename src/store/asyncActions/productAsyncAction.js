"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApiService } from "../apiServices/productApiServices";

// Define an asynchronous thunk to fetch all products
export const getAllProductsAction = createAsyncThunk(
  "getAllProductsAction",
  async () => {
    try {
      // Call the product API service to fetch all products
      const response = await productApiService.getAllProducts();
      // Return the response data if successful
      return response;
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error("Error fetching all products:", error);
      throw error; // Rethrow the error to be caught by Redux Toolkit
    }
  }
);
