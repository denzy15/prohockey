import { Alert, Box, Grid, Typography } from "@mui/material";
import React from "react";
import ItemCard from "../ItemCard";
import { useCategories } from "../../hooks/useCategories";

const CategoryList = () => {
  const { categories } = useCategories();

  return (
    <>
      <Typography variant="subtitle1">
        Всего категорий: {categories.length}
      </Typography>
      <Grid container spacing={1} sx={{ my: 2 }}>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <ItemCard key={category._id} data={category} />
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

export default CategoryList;
