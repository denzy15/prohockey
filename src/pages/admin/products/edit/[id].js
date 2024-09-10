import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { ProductForm } from "@/modules/admin";
import { SERVER_URL } from "@/shared/constants";

const ProductEdit = ({ categories, initialData }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Редактирование товара
      </Typography>
      <ProductForm categories={categories} initialData={initialData} />
    </Box>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    const productId = params.id;
    const { data: categories } = await axios.get(`${SERVER_URL}/categories`);
    const { data: initialData } = await axios.get(
      `${SERVER_URL}/products?_id=${productId}`
    );

    return {
      props: { categories, initialData },
    };
  } catch (error) {
    console.error("Error fetching product data:", error.message);
    return {
      props: { categories: [], initialData: null },
    };
  }
};

export default ProductEdit;
