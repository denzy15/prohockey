import { OrdersPageContent } from "@/modules/admin";
import { Box, Typography } from "@mui/material";
import React from "react";

const OrdersPage = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5">Заказы</Typography>
      <OrdersPageContent/>
    </Box>
  );
};



export default OrdersPage;
