import React, { useEffect, useState } from "react";
import { IProduct } from "../../api/products/types";
import { useParams } from "react-router-dom";
import products from "../../api/products";
import { Box, Button, Container, Grid, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import Loader from "../../components/Loader";

const Buy = () => {
  const [productData, setProductData] = useState<IProduct | undefined>(
    undefined
  );
  const { productId } = useParams();
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

  const { title, price, description, image, ratingRate } = productData;

  const rightPrice = Math.floor(price * 30);

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
          <Typography
            sx={{ mt: "40px", textAlign: "center" }}
            variant="h2"
            color="coral"
          >
            {rightPrice} UAH
          </Typography>
          <Box sx={{ mt: "10px", textAlign: "center" }}>
            <Rating name="rate" defaultValue={ratingRate} readOnly />
            <br />
            <Button
              sx={{
                mt: "25px",
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
          </Box>

          <Typography
            sx={{ margin: "70px 0px 0px 40px" }}
            variant="h4"
            color="white"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Buy;
