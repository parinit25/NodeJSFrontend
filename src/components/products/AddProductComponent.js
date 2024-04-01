"use client";
import { Button, CardContent, Grid, TextField, useTheme } from "@mui/material";
import CardHeaderWrapper from "../layout/CardHeaderWrapper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addProductAction } from "@/store/asyncActions/productAsyncAction";

// Create Yup schema for validation
const schema = yup.object().shape({
  productName: yup.string(),
  productDescription: yup.string(),
  productImageURL: yup.string(),
  productPrice: yup.string(),
});

const AddProductComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  // Initialize react-hook-form with Yup resolver
  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newProduct = {
      title: data?.productName,
      imageUrl: data?.productImageURL,
      description: data?.productDescription,
      price: data?.productPrice,
    };
    dispatch(addProductAction(newProduct));
  };

  return (
    <CardHeaderWrapper title="Add Product">
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="productName"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Product Name" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="productDescription"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Product Description" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="productImageURL"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Product Image URL" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="productPrice"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Product Price" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </CardHeaderWrapper>
  );
};

export default AddProductComponent;
