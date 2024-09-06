import { addSpacesToNumber, formatPhoneNumberWithSpaces } from "@/shared/utils";
import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const OrderItem = ({ order }) => {
  const router = useRouter();

  return (
    <Paper
      elevation={4}
      sx={{
        bgcolor: "text.primary",
        mb: 2,
        borderRadius: 2,
        p: 1,
        color: "background.paper",
      }}
    >
      <Typography variant="subtitle1">
        {new Date(order.createdAt).toLocaleString()}
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <Typography sx={{ fontWeight: 600 }}>Клиент:</Typography>
          <Divider sx={{ my: 1 }} color="background.paper" />
          <Typography variant="subtitle2">{order.name}</Typography>
          <Typography variant="subtitle2">
            {formatPhoneNumberWithSpaces(order.phone)}
          </Typography>
          <Typography variant="subtitle2">{order.email}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 600 }}>
            Кол-во товаров: {order.products.length}
          </Typography>
          <Divider sx={{ my: 1 }} color="background.paper" />
          {order.products.map((prod, idx) => (
            <Typography key={idx} variant="subtitle2">
              {prod.name}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ fontWeight: 600 }}>Сумма</Typography>
          <Divider sx={{ my: 1 }} color="background.paper" />
          <Typography sx={{ mt: 1, fontWeight: 600 }}>
            {addSpacesToNumber(order.totalPrice)} ₸
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} color="background.paper" />
      <Button
        variant="outlined"
        onClick={() => router.push(`/admin/orders/${order._id}`)}
      >
        Подробнее
      </Button>
    </Paper>
  );
};

export default OrderItem;
