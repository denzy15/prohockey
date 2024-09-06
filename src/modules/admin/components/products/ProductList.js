import { Alert, Grid, Typography } from "@mui/material";
import React from "react";
import ItemCard from "../ItemCard";
import { useProducts } from "../../hooks/useProducts";

const ProductList = () => {
  const { products } = useProducts();

  return (
    <>
      <Typography variant="subtitle1">
        Всего товаров: {products.length}
      </Typography>
      <Grid container spacing={1} sx={{ my: 1,  }}>
        {products.length > 0 ? (
          products.map((product) => (
            <ItemCard key={product._id} data={product} />
          ))
        ) : (
          <Grid item xs={12}>
          <Alert severity="info">Пусто</Alert>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ProductList;
