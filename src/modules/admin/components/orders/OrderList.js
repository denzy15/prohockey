import { Alert, Box, Grid } from "@mui/material";
import React from "react";
import { useOrders } from "../../hooks/useOrders";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const { orders } = useOrders();

  return (
    <Box sx={{ mt: 2 }}>
      {orders.length === 0 ? (
        <Alert severity="info">Заказов не найдено</Alert>
      ) : (
        orders.map((order) => <OrderItem order={order} key={order._id} />)
      )}
    </Box>
  );
};

export default OrderList;
