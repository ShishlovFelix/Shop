import React from "react";
import MainCarousel from "./components/Corousel";
import { Container } from "@mui/material";
import AllProducts from "./components/AllProducts";

const Main: React.FC = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <MainCarousel />
      <AllProducts />
    </Container>
  );
};

export default Main;
