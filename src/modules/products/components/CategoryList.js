import { Grid } from "@mui/material";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories }) => {
  return (
    <Grid container spacing={2} sx={{py: 3}}>
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </Grid>
  );
};

export default CategoryList;
