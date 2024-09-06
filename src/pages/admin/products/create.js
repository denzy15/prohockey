import { ProductForm } from "@/modules/admin";
import { SERVER_URL } from "@/shared/constants";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

const CreateProductPage = ({ categories }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Создание товара
      </Typography>
      <ProductForm categories={categories} />
    </Box>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data: categories } = await axios.get(`${SERVER_URL}/categories`);
    return {
      props: { categories },
    };
  } catch (error) {
    return {
      props: { categories: [] },
    };
  }
};

export default CreateProductPage;
