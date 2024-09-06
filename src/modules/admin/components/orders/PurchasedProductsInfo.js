import { Divider, Paper, Typography } from "@mui/material";
import React from "react";
import PurchasedProductItem from "./PurchasedProductItem";
import { addSpacesToNumber } from "@/shared/utils";

const PurchasedProductsInfo = ({ products, totalPrice }) => {
  return (
    <Paper sx={{ p: 1, mb: 2 }}>
      <Typography variant="h5" marginY={1}>
        Информация о товарах
      </Typography>
      <Divider color="white" />
      {products &&
        products.map((product, idx) => (
          <PurchasedProductItem product={product} key={idx} />
        ))}
      <Divider color="white" />
      <Typography variant="h5" marginY={1}>
        Итоговая цена: {addSpacesToNumber(totalPrice)} ₸
      </Typography>
    </Paper>
  );
};

export default PurchasedProductsInfo;
