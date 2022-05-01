import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../api/products/types";
import user from "../../api/user";
import ProductCard from "../Main/components/ProductCard";

const MyWishList = () => {
  const [allWishList, setWishList] = useState<IProduct[]>([]);
  useEffect(() => {
    user.getUserWishlist().then((e) => setWishList(e.data));
  }, []);

  const allWishElement = allWishList.map((product) => {
    return (
      <Grid item sx={{ padding: "0px 5px" }} xs={3}>
        <ProductCard {...product} isInWishList={true}></ProductCard>
      </Grid>
    );
  });

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ mt: 10 }}
            variant="h2"
            component="div"
            color="coral"
          >
            Wish List
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>{allWishElement}</Box>
      </Grid>
    </Grid>
  );
};

export default MyWishList;
