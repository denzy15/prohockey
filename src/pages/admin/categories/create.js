import { CategoryForm } from "@/modules/admin";
import { Box, Typography } from "@mui/material";
import React from "react";

const CreateCategoryPage = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Создание категории
      </Typography>
      <CategoryForm />
    </Box>
  );
};

export default CreateCategoryPage;
