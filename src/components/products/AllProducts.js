"use client";
import { getAllProductsAction } from "@/store/asyncActions/productAsyncAction";
import { selectProducts } from "@/store/reducer/productSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const productsList = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello world")
    dispatch(getAllProductsAction());
  },[]);

  return <div>AllProducts</div>;
};

export default AllProducts;
