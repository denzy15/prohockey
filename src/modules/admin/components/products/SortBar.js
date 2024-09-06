import {
  Box,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Close } from "@mui/icons-material";

const SortBar = ({ categories }) => {
  const { sortProductByCategory, resetSorting } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChange = (e) => {
    setSelectedCategory(e.target.value);
    sortProductByCategory(e.target.value);
  };

  const handleResetSorting = () => {
    setSelectedCategory("");
    resetSorting();
  };

  return (
    <Paper sx={{ my: 1, p: 1 }}>
      <InputLabel id="category-sort">Сортировать по категории</InputLabel>
      <Select
        name="category"
        labelId="category-sort"
        onChange={handleInputChange}
        value={selectedCategory}
      >
        {!!categories &&
          categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              {category.name}
            </MenuItem>
          ))}
      </Select>
      {!!selectedCategory && (
        <IconButton size="small" onClick={handleResetSorting}>
          <Close />
        </IconButton>
      )}
    </Paper>
  );
};

export default SortBar;
