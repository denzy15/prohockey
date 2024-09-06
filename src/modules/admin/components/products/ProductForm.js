import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Radio,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  createProduct,
  deleteUnusedParameterImages,
  updateProduct,
} from "../../api/api";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SERVER_URL } from "@/shared/constants";

const initialProductData = {
  name: "",
  basePrice: "",
  shortDescription: "",
  detailedDescription: "",
  category: "",
  parameters: [],
  photo: null,
};

const ProductForm = ({ categories, initialData }) => {
  const [productData, setProductData] = useState(
    initialData || initialProductData
  );
  const router = useRouter();

  const [hasPhotoParameter, setHasPhotoParameter] = useState(null);

  const [loading, setLoading] = useState(false);

  const [mainPhoto, setMainPhoto] = useState(
    SERVER_URL + "/" + productData.photo
  );

  useEffect(() => {
    if (initialData) {
      setProductData({
        ...initialData,
        photoPreview: initialData.photo
          ? `${SERVER_URL}/${initialData.photo}`
          : "",
      });

      initialData.parameters.forEach((param, paramIndex) => {
        if (param.values.some((value) => value.photo)) {
          setHasPhotoParameter(paramIndex);
        }
      });
    }
  }, [initialData]);

  useEffect(() => {
    if (Number.isInteger(hasPhotoParameter)) {
      const defaultPhoto = productData.parameters[
        hasPhotoParameter
      ].values.find((val) => val.defaultValue)?.photo;

      if (typeof defaultPhoto === "string") {
        setMainPhoto(`${SERVER_URL}/${defaultPhoto}`);
      } else if (typeof defaultPhoto === "object" && defaultPhoto !== null) {
        setMainPhoto(defaultPhoto.photoPreview);
      } else {
        setMainPhoto("");
      }
    }
  }, [hasPhotoParameter, productData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "basePrice") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setProductData({ ...productData, [name]: numericValue });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setProductData({
      ...productData,
      [name]: file,
      photoPreview: URL.createObjectURL(file),
    });
  };

  const handleAddParameter = () => {
    setProductData({
      ...productData,
      parameters: [...productData.parameters, { name: "", values: [] }],
    });
  };

  const handleParameterChange = (index, name) => (e) => {
    const newParameters = [...productData.parameters];
    newParameters[index][name] = e.target.value;
    setProductData({ ...productData, parameters: newParameters });
  };

  const handleAddParameterValue = (paramIndex) => () => {
    const newParameters = [...productData.parameters];
    newParameters[paramIndex].values.push({
      value: "",
      photo: null,
      photoPreview: "",
      defaultValue: newParameters[paramIndex].values.length === 0,
    });
    setProductData({ ...productData, parameters: newParameters });
  };

  const handleParameterValueChange = (paramIndex, valueIndex, name) => (e) => {
    const newParameters = [...productData.parameters];
    if (name === "photo") {
      const file = e.target.files[0];
      newParameters[paramIndex].values[valueIndex][name] = file;
      newParameters[paramIndex].values[valueIndex].photoPreview =
        URL.createObjectURL(file);
      setHasPhotoParameter(paramIndex);
    } else if (name === "value") {
      newParameters[paramIndex].values[valueIndex][name] = e.target.value;
      
    } else if (name === "extraPrice") {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      newParameters[paramIndex].values[valueIndex][name] = numericValue;
    } else {
      for (const value of newParameters[paramIndex].values) {
        value.defaultValue = false;
      }

      newParameters[paramIndex].values[valueIndex].defaultValue = true;
    }

    setProductData({ ...productData, parameters: newParameters });

    if (paramIndex === hasPhotoParameter) {
      setProductData({
        ...productData,
        photo: newParameters[paramIndex].values[valueIndex].photo,
        photoPreview: newParameters[paramIndex].values[valueIndex].photoPreview,
      });
    }
  };

  const handleRemoveParameter = (index) => () => {
    const newParameters = [...productData.parameters];

    if (newParameters[index].values.some((value) => value.photo)) {
      setHasPhotoParameter(null);
    }

    newParameters.splice(index, 1);
    setProductData({ ...productData, parameters: newParameters });
  };

  const handleRemoveParameterValue = (paramIndex, valueIndex) => () => {
    const newParameters = [...productData.parameters];

    newParameters[paramIndex].values.splice(valueIndex, 1);

    if (
      paramIndex === hasPhotoParameter &&
      !newParameters[paramIndex].values.length
    ) {
      setHasPhotoParameter(null);
    }

    setProductData({ ...productData, parameters: newParameters });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const {
      name,
      basePrice,
      shortDescription,
      detailedDescription,
      category,
      parameters,
      photo,
    } = productData;

    if (
      !name ||
      !basePrice ||
      !shortDescription ||
      !detailedDescription ||
      !category ||
      !photo
    ) {
      toast.error("Все поля должны быть заполнены");
      return;
    }

    const updatedParameters = parameters.map((param) => {
      const hasDefaultValue = param.values.some((value) =>
        value.hasOwnProperty("defaultValue")
      );

      if (!hasDefaultValue) {
        param.values = param.values.map((value, index) => ({
          ...value,
          defaultValue: index === 0,
        }));
      }

      return param;
    });

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("basePrice", basePrice);
    formData.append("shortDescription", shortDescription.trim());
    formData.append("detailedDescription", detailedDescription.trim());
    formData.append("category", category);
    if (!hasPhotoParameter) {
      formData.append("product", photo);
    }

    let isAllImagesLoaded = true;
    parameters.forEach((param, paramIndex) => {
      param.values.forEach((value, valueIndex) => {
        if (value.photo) {
          if (value.photo.name) {
            formData.append(`parameterPhotos`, value.photo, value.photo.name);
          } else {
            formData.append(`parameterPhotos`, value.photo);
          }
        }

        if (paramIndex === hasPhotoParameter && !value.photo) {
          isAllImagesLoaded = false;
        }
      });
    });

    if (!isAllImagesLoaded) {
      toast.error("Не загружена картинка для значения параметра");
      setLoading(false);
      return;
    }

    formData.append("parameters", JSON.stringify(updatedParameters));

    try {
      if (initialData) {
        await updateProduct(initialData._id, formData);
        toast.success("Продукт успешно обновлен");
      } else {
        await createProduct(formData);
        toast.success("Продукт успешно создан");
      }
      router.push("/admin/products");
    } catch (error) {
      console.log(error);
      deleteUnusedParameterImages();
      toast.error(error.message || "Произошла ошибка, попробуйте позже");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Создание продукта
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          autoComplete="off"
          label="Название"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          autoComplete="off"
          label="Базовая цена (тенге)"
          name="basePrice"
          value={productData.basePrice}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          autoComplete="off"
          label="Краткое описание"
          name="shortDescription"
          value={productData.shortDescription}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mt: 2 }}
        />
        <TextField
          autoComplete="off"
          label="Детальное описание"
          name="detailedDescription"
          value={productData.detailedDescription}
          onChange={handleInputChange}
          fullWidth
          required
          multiline
          rows={4}
          sx={{ mt: 2 }}
        />
        <Button
          disabled={Number.isInteger(hasPhotoParameter)}
          variant="contained"
          component="label"
          fullWidth
          sx={{ mt: 2 }}
        >
          Загрузить фотографию
          <input type="file" hidden name="photo" onChange={handleFileChange} />
        </Button>

        {mainPhoto && (
          <Box mt={2} textAlign="center">
            <img
              src={mainPhoto}
              alt="Превью"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          </Box>
        )}

        <Typography variant="h6" sx={{ mt: 2 }}>
          Категория
        </Typography>

        <Select
          name="category"
          onChange={handleInputChange}
          value={productData.category}
          fullWidth
          sx={{ mt: 2 }}
        >
          {!!categories &&
            categories.map((category) => (
              <MenuItem key={category._id} value={category._id}>
                {category.name}
              </MenuItem>
            ))}
        </Select>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Параметры
        </Typography>
        {productData.parameters.map((parameter, paramIndex) => (
          <Box
            key={paramIndex}
            sx={{
              mt: 2,
              mb: 2,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <TextField
              autoComplete="off"
              label="Название параметра"
              value={parameter.name}
              onChange={handleParameterChange(paramIndex, "name")}
              fullWidth
              required
            />
            {parameter.values.map((value, valueIndex) => (
              <Grid
                container
                spacing={1}
                key={valueIndex}
                sx={{
                  mt: 1,
                  borderBottom: "1px solid",
                  borderColor: "text.primary",
                  pb: 3,
                }}
              >
                {valueIndex === 0 && (
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      Выберите значение по умолчанию
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={1}>
                  <Radio
                    onChange={handleParameterValueChange(
                      paramIndex,
                      valueIndex,
                      "defaultValue"
                    )}
                    checked={value.defaultValue || false}
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    autoComplete="off"
                    label="Значение"
                    value={value.value}
                    onChange={handleParameterValueChange(
                      paramIndex,
                      valueIndex,
                      "value"
                    )}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={5}>
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    disabled={
                      hasPhotoParameter !== null &&
                      paramIndex !== hasPhotoParameter
                    }
                  >
                    Загрузить фотографию
                    <input
                      type="file"
                      hidden
                      accept="image/png, image/gif, image/jpeg"
                      name="photo"
                      onChange={handleParameterValueChange(
                        paramIndex,
                        valueIndex,
                        "photo"
                      )}
                    />
                  </Button>
                  {(value.photoPreview || value.photo) && (
                    <Box mt={2} textAlign="center">
                      <img
                        src={
                          value.photoPreview || SERVER_URL + "/" + value.photo
                        }
                        alt="Превью"
                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                      />
                    </Box>
                  )}
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    onClick={handleRemoveParameterValue(paramIndex, valueIndex)}
                  >
                    <Delete />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>Надбавка к цене:</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    value={value.extraPrice}
                    onChange={handleParameterValueChange(
                      paramIndex,
                      valueIndex,
                      "extraPrice"
                    )}
                    fullWidth
                    label="Надбавка в тенге"
                    autoComplete="off"

                  />
                </Grid>
              </Grid>
            ))}
            <Button
              variant="outlined"
              onClick={handleAddParameterValue(paramIndex)}
              fullWidth
              sx={{ mt: 2 }}
            >
              Добавить значение
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleRemoveParameter(paramIndex)}
              fullWidth
              sx={{ mt: 1 }}
            >
              Удалить параметр
            </Button>
          </Box>
        ))}
        <Button
          variant="outlined"
          onClick={handleAddParameter}
          fullWidth
          sx={{ mt: 2 }}
        >
          Добавить параметр
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          // disabled={loading}
        >
          Сохранить
        </Button>
      </form>
    </Paper>
  );
};

export default ProductForm;
