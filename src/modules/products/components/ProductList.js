import React from "react";
import { Alert, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

const ProductList = () => {
  const { products } = useProducts();

  return products.length > 0 ? (
    <Grid container rowSpacing={2} columnSpacing={5} sx={{ my: 2 }}>
      {products.map((product) => (
        <Grid item key={product._id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Alert severity="info" sx={{ textTransform: "uppercase", my: 1 }}>
      Товары не найдены
    </Alert>
  );
};

export default ProductList;
