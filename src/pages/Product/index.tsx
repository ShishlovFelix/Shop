import React, { useEffect, useState } from "react";
import { IProduct } from "../../api/products/types";
import { useParams } from "react-router-dom";
import products from "../../api/products";
import { Box, Button, Checkbox, Container, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import Loader from "../../components/Loader";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import user from "../../api/user";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productData, setProductData] = useState<IProduct | undefined>(
    undefined
  );
  const [allWishList, setWishList] = useState<IProduct[]>([]);
  useEffect(() => {
    user.getUserWishlist().then((e) => setWishList(e.data));
  }, []);
  const isInWishListFind = allWishList.find((wishProduct) => {
    return wishProduct.id === productId;
  });
  const isInWishList = Boolean(isInWishListFind);
  const [checked, setChecked] = useState<boolean>(isInWishList);
  useEffect(() => {
    if (productId) {
      products
        .getProductById(productId)
        .then((res) => setProductData(res.data));
    }
  }, [productId]);
  if (!productData) {
    return <Loader />;
  }
  if (!allWishList.length) {
    return <Loader />;
  }
  console.log(isInWishList, "Product!!!!!!!!!!!");
  console.log(checked, "Product!!!!!!!!!!!22222");
  const { title, price, description, category, image, ratingRate } =
    productData;
  const rightPrice = Math.floor(price * 30);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Typography
            sx={{ margin: "40px 0px 60px 20px" }}
            variant="h2"
            color="coral"
          >
            {title}
          </Typography>
          <Box>
            <img style={{ width: "100%" }} src={image} alt="None image" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ mt: "10px", textAlign: "center", display: "block" }}>
            <Box
              sx={{ display: "block", mt: "40px", justifyContent: "center" }}
            >
              <Typography variant="h2" color="coral">
                {rightPrice} UAH
              </Typography>

              <Rating name="rate" defaultValue={ratingRate} readOnly />
            </Box>
            <Box
              sx={{
                display: "flex",
                mt: "25px",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                sx={{
                  height: "60px",
                  width: "250px",
                  background: "coral",
                }}
                variant="contained"
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    letterSpacing: "7px",
                    alignItems: "center",
                    display: "flex",
                  }}
                  variant="h5"
                  color="black"
                >
                  Buy
                </Typography>
              </Button>
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                defaultChecked={isInWishList}
                onChange={(e) => {
                  if (isInWishList === true) {
                    user.deleteFromWishList(String(productId));
                  } else {
                    user.addToWishList(String(productId));
                  }
                  return setChecked(e.target.checked);
                }}
              />
            </Box>
          </Box>

          <Typography
            sx={{ margin: "70px 0px 0px 40px" }}
            variant="h4"
            color="white"
          >
            {description}
          </Typography>
          <Typography
            sx={{ margin: "10px 0px 0px 40px" }}
            variant="h2"
            color="white"
          >
            {category}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
