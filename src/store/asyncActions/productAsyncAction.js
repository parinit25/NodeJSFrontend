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
export const getProductAction = createAsyncThunk(
  "getProductAction",
  async (prodId) => {
    try {
      const response = await productApiService.getProduct(prodId);
      return response;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }
);
export const addProductAction = createAsyncThunk(
  "addProductAction",
  async (product) => {
    try {
      console.log(product);
      const response = await productApiService.addProduct(product);
      return response;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }
);
