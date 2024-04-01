"use client"
const { CardContent, Grid, Card, CardMedia, Typography } = require("@mui/material");
import { getProductAction } from "@/store/asyncActions/productAsyncAction";
import { selectProductDetail } from "@/store/reducer/productSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductsDetails = ({prodId}) => {
  const productDetail = useSelector(selectProductDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAction(prodId));
  }, []);

  return (
    <CardContent>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 540 }}
              image={productDetail?.imageUrl}
              title="productImage"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {productDetail?.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {productDetail?.description}
              </Typography>
              <Typography>{productDetail?.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </CardContent>
  );
};
export default ProductsDetails;
