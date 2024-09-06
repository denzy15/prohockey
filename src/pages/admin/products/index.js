import { ProductList, ProductsPageContent } from "@/modules/admin";
import { SERVER_URL } from "@/shared/constants";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const ProductsPage = ({ products, categories }) => {
  const router = useRouter();

  return (
    <Box sx={{ py: 1 }}>
      <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
        <Typography variant="h5">Товары</Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/admin/products/create")}
        >
          Добавить товар
        </Button>
      </Stack>
      <ProductsPageContent products={products} categories={categories} />
    </Box>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data: categories } = await axios.get(`${SERVER_URL}/categories`);
    const { data: products } = await axios.get(`${SERVER_URL}/products`);
    return {
      props: { products, categories },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { products: [], categories: [] },
    };
  }
};

export default ProductsPage;
