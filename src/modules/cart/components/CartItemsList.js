import React from "react";
import { Alert, Paper, Typography, Grid } from "@mui/material";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const { cart } = useCart();

console.log(cart);


  return (
    <Paper sx={{ bgcolor: "primary.light", color: "background.paper", p: 2 }}>
      <Typography variant="h5" mb={2}>
        Корзина
      </Typography>

      {cart.length === 0 ? (
        <Alert severity="info" color="info">
          Пусто
        </Alert>
      ) : (
        <Grid container>
          {cart.map((product, index) => (
            <CartItem index={index} key={index} product={product} />
          ))}
        </Grid>
      )}
    </Paper>
  );
};

export default CartItemsList;
