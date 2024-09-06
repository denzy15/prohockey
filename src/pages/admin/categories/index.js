import { CategoryList, CategoryPageContent } from "@/modules/admin";
import { SERVER_URL } from "@/shared/constants";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const CategoriesPage = ({ categories }) => {
  const router = useRouter();

  return (
    <Box sx={{ py: 1 }}>
      <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
        <Typography variant="h5">Категории товаров</Typography>
        <Button
          variant="contained"
          onClick={() => router.push("/admin/categories/create")}
        >
          Добавить категорию
        </Button>
      </Stack>
      <CategoryPageContent categories={categories} />
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
    console.error(error);
    return {
      props: { categories: [] },
    };
  }
};

export default CategoriesPage;
