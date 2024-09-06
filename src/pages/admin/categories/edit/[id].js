import { CategoryForm } from "@/modules/admin";
import { SERVER_URL } from "@/shared/constants";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

const EditCategoryPage = ({ initialData }) => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Редактирование категории
      </Typography>
      <CategoryForm initialData={initialData} />
    </Box>
  );
};

export const getServerSideProps = async ({ params }) => {

  try {
    const categoryId = params.id;
    const { data: initialData } = await axios.get(
      `${SERVER_URL}/categories/${categoryId}`
    );

    return {
      props: { initialData },
    };
  } catch (error) {
    console.error("Error fetching category data:", error.message);
    return {
      props: { initialData: null },
    };
  }
};

export default EditCategoryPage;
