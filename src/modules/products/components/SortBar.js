import React from "react";
import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { useProducts } from "../hooks/useProducts";

const SortBar = () => {
  const { sort, setSort } = useProducts();

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <Paper
      sx={{
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 3,
        px: 2,
        py: 1,
        my: 1,
      }}
    >
      <Typography>Сортировать по</Typography>
      <FormControl>
        <Select variant="standard" value={sort} onChange={handleSortChange}>
          <MenuItem value="popularity">Популярные</MenuItem>
          <MenuItem value="price-asc">Цена: по возрастанию</MenuItem>
          <MenuItem value="price-desc">Цена: по убыванию</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
};

export default SortBar;
