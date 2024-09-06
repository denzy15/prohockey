import React from "react";
import { Add, Remove } from "@mui/icons-material";
import { Divider, IconButton, Stack, Typography } from "@mui/material";

const CartCounter = ({
  order,
  cartCounter,
  handleChangeCartCounter,
  isInCart,
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        order: order || null,
        alignItems: "center",
        bgcolor: "primary.light",
        display: "inline-flex",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "primary.dark",
      }}
    >
      <IconButton
        color="secondary"
        onClick={() => handleChangeCartCounter("remove")}
        disabled={isInCart}
      >
        <Remove sx={{ fontSize: 16 }} />
      </IconButton>
      <Divider orientation="vertical" flexItem color="primary.light" />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: 16,
          px: 1,
        }}
      >
        {cartCounter}
      </Typography>
      <Divider orientation="vertical" flexItem color="primary.light" />
      <IconButton
        disabled={isInCart}
        onClick={() => handleChangeCartCounter("add")}
        color="secondary"
      >
        <Add color="black" sx={{ fontSize: 16 }} />
      </IconButton>
    </Stack>
  );
};

export default CartCounter;
