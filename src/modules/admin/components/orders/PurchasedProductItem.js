import { SERVER_URL } from "@/shared/constants";
import { addSpacesToNumber } from "@/shared/utils";
import { Grid, Typography } from "@mui/material";
import React from "react";

const PurchasedProductItem = ({ product }) => {
  return (
    <Grid container spacing={1} sx={{ my: 2}}>
      <Grid item xs={2}>
        <img
          style={{ maxWidth: "100%" }}
          alt={product.name}
          src={`${SERVER_URL}/${product.photo}`}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>{product.name}</Typography>
        <Typography variant="subtitle2" sx={{my: 1}}>{product.category.name}</Typography>
        {product.parameters.map((param) => (
          <Typography variant="subtitle2">
            {param.name} : {param.value.value}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle2">
          Куплено: {product.cartCounter} шт.
        </Typography>
        <Typography variant="subtitle2">
          Цена за 1 шт: {addSpacesToNumber(product.finalPrice)} ₸
        </Typography>
        <Typography variant="subtitle2">
          Общая цена за товар:
        </Typography>
        <Typography variant="h6">
          {addSpacesToNumber(product.cartCounter * product.finalPrice)} ₸
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PurchasedProductItem;
