"use client";
import Guard from "@/components/layout/Gaurd";
import { AllProducts } from "@/components/products/AllProducts";

const ProductsMainPage = () => {
  return (
    <Guard>
      <AllProducts />
    </Guard>
  );
};

export default ProductsMainPage;
