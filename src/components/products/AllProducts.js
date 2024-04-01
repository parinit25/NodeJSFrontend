import { getAllProductsAction } from "@/store/asyncActions/productAsyncAction";
import { selectProducts } from "@/store/reducer/productSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
} = require("@mui/material");

export const AllProducts = () => {
  const productsList = useSelector(selectProducts);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    console.log("hello world");
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const detailsPageOpener = (id) => {
    router.push(`/products/${id}`);
  };
  return (
    <CardContent>
      <Grid container spacing={6}>
        {productsList.length > 0 &&
          productsList?.map((item) => (
            <Grid item xs={12}>
              <Card sx={{ maxWidth: 345 }} key={item?._id}>
                <CardMedia
                  sx={{ height: 540 }}
                  image={item?.imageUrl}
                  title="productImage"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item?.description}
                  </Typography>
                  <Typography>{item?.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => detailsPageOpener(item._id)}
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </CardContent>
  );
};
