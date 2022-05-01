import React, { useEffect, useState } from "react";

import { IProduct } from "../../../../api/products/types";
import products from "../../../../api/products";

import { Grid } from "@mui/material";

import ProductCard from "../ProductCard";
import Loader from "../../../../components/Loader";
import { useAppSelector } from "../../../../app/store/hooks";
import user from "../../../../api/user";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [allWishList, setWishList] = useState<IProduct[]>([]);
  useEffect(() => {
    user.getUserWishlist().then((e) => setWishList(e.data));
  }, []);
  const searchValue = useAppSelector((state) => state.search.search);

  const filterProducts = allProducts.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    products.getAllProducts().then((e) => setAllProducts(e.data));
  }, []);

  if (!allProducts.length) {
    return <Loader />;
  }

  const allProductsElement = filterProducts.map((product) => {
    const isInWishListFind = allWishList.find((wishProduct) => {
      return wishProduct.id === product.id;
    });
    const isInWishList = Boolean(isInWishListFind);

    if (!allWishList.length) {
      return <Loader />;
    }
    return (
      <Grid item sx={{ padding: "0px 5px" }} xs={3}>
        <ProductCard {...product} isInWishList={isInWishList}></ProductCard>
      </Grid>
    );
  });
  return <Grid container>{allProductsElement}</Grid>;
};

export default AllProducts;
