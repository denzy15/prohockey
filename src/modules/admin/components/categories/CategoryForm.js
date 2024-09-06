import { CloudUpload } from "@mui/icons-material";
import { Alert, Box, Button, Paper, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createCategory, updateCategory } from "../../api/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SERVER_URL } from "@/shared/constants";
import { transliterate } from "@/shared/utils";

const initialFormData = {
  name: "",
  photo: null,
  photoPreview: null,
};

const CategoryForm = ({ initialData }) => {
  const [categoryData, setCategoryData] = useState(
    initialData || initialFormData
  );

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (initialData) {
      setCategoryData({
        ...initialData,
        photoPreview: `${SERVER_URL}/${initialData.photo}`,
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setCategoryData((prev) => ({
      ...prev,
      photo: e.target.files[0],
      photoPreview: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!categoryData.name || !categoryData.photo) {
      toast.error("Все поля должны быть заполнены");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", categoryData.name.trim());
    formDataToSend.append("urlPath", transliterate(categoryData.name).trim());
    formDataToSend.append("category", categoryData.photo);

    try {
      if (initialData) {
        await updateCategory(router.query.id, formDataToSend);
        toast.success("Категория обновлена");
        router.push("/admin/categories");
        return;
      }
      await createCategory(formDataToSend);
      toast.success("Категория создана");
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error.message || "Произошла ошибка, попробуйте позже");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          autoComplete="off"
          fullWidth
          label="Название"
          name="name"
          value={categoryData.name}
          onChange={handleInputChange}
          required
          sx={{ mb: 2 }}
        />

        <Stack direction="row" spacing={2} alignItems={"center"}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUpload />}
            color="info"
          >
            Загрузить файл
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
              sx={{ mb: 2 }}
            />
          </Button>
          {!!categoryData.photo ? (
            <Alert severity="success">{categoryData.photo.name}</Alert>
          ) : (
            <Alert severity="warning">Файл не загружен!</Alert>
          )}
        </Stack>
        {categoryData.photoPreview && (
          <Box mt={2} textAlign="center">
            <img
              src={categoryData.photoPreview}
              alt="Превью"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          </Box>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, display: "block" }}
          disabled={loading}
        >
          Сохранить
        </Button>
      </Box>
    </Paper>
  );
};

export default CategoryForm;
