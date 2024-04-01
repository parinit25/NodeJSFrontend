"use client";
import APIHelper from "@/api-helper/ApiHelper";

const apiHelper = new APIHelper();

class ProductApiService {
  static getInstance() {
    return new ProductApiService();
  }

  getAllProducts = async () => {
    try {
      const response = await apiHelper.get("/products");
      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  getProduct = async (prodId) => {
    try {
      const response = await apiHelper.get(`/products/details/${prodId}`);
      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
  addProduct = async (product) => {
    try {
      const response = await apiHelper.post(`/admin/add-product`, product);
      return response;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
}

export const productApiService = ProductApiService.getInstance();
