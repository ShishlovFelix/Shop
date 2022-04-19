import React, { useEffect, useState } from "react";

import { IProduct } from "../../../../api/products/types";
import products from "../../../../api/products";

import { Grid } from "@mui/material";

import ProductCard from "../ProductCard";
import Loader from "../../../../components/Loader";
import { useAppSelector } from "../../../../app/store/hooks";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
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
    return (
      <Grid item sx={{ padding: "0px 5px" }} xs={3}>
        <ProductCard {...product}></ProductCard>
      </Grid>
    );
  });
  return <Grid container>{allProductsElement}</Grid>;
};

export default AllProducts;
