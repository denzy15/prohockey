import { SERVER_URL } from "@/shared/constants";
import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { deleteCategory, deleteProduct } from "../api/api";
import { toast } from "react-toastify";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useRouter } from "next/router";
import { addSpacesToNumber } from "@/shared/utils";
import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../hooks/useCategories";

const ItemCard = ({ data }) => {
  const itemType = data.basePrice ? "product" : "category";
  const [anchorEl, setAnchorEl] = useState(null);

  const { deleteContextProduct } = useProducts() ?? {
    deleteContextProduct: () => {},
  };

  const { deleteContextCategory } = useCategories() ?? {
    deleteContextCategory: () => {},
  };

  const router = useRouter();

  const handleStartEdit = () => {
    if (itemType === "category") {
      router.push(`/admin/categories/edit/${data._id}`);
    } else {
      router.push(`/admin/products/edit/${data._id}`);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    try {
      if (itemType === "category") {
        await deleteCategory(data._id);
        deleteContextCategory(data._id);
      } else {
        await deleteProduct(data._id);
        deleteContextProduct(data._id);
      }

      handleClose();
    } catch (e) {
      toast.error(e);
      console.log(e);
    }
  };

  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={data.photo}
          title={data.name}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography gutterBottom variant="body1" component="div">
            {data.name}
          </Typography>
          {data.price && (
            <Typography variant="h6">
              {addSpacesToNumber(data.price)} ₸
            </Typography>
          )}
        </CardContent>
        <CardActions sx={{ flexDirection: "column", gap: 1, pb: 2 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<Edit />}
            size="small"
            onClick={handleStartEdit}
          >
            Редактировать
          </Button>

          <Button
            onClick={(event) => setAnchorEl(event.currentTarget)}
            fullWidth
            variant="outlined"
            color="error"
            size="small"
            startIcon={<Delete />}
          >
            Удалить
          </Button>
        </CardActions>
      </Card>
      <DeleteConfirmModal
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
    </Grid>
  );
};

export default ItemCard;
