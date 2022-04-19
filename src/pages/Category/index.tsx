import React, { useEffect, useState } from "react";
import { IProduct } from "../../api/products/types";
import { useParams } from "react-router-dom";
import products from "../../api/products";
import { Container, Grid } from "@mui/material";

import ProductCard from "../Main/components/ProductCard";
import Loader from "../../components/Loader";

const Category: React.FC = () => {
  const [categoryData, setCategoryData] = useState<IProduct[] | undefined>(
    undefined
  );

  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    if (category) {
      products
        .getProductsInCategory(category)
        .then((res) => setCategoryData(res.data));
    }
    return setCategoryData(undefined);
  }, [category]);

  if (!categoryData) {
    return <Loader />;
  }

  const allProductsElement = categoryData.map((product) => {
    const { id } = product;
    return (
      <Grid item sx={{ padding: "0px 5px" }} key={id} xs={3}>
        <ProductCard {...product}></ProductCard>
      </Grid>
    );
  });

  return (
    <Container maxWidth="xl">
      <Grid container>{allProductsElement}</Grid>
    </Container>
  );
};

export default Category;
