import {
  Box,
  Button,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useCart } from "../hooks/useCart";
import { addSpacesToNumber } from "@/shared/utils";
import { useRouter } from "next/router";

const Summary = () => {
  const { cart } = useCart();

  const router = useRouter();

  if (cart.length === 0) {
    return null;
  }

  const totalSum = cart.reduce(
    (prev, curr) => prev + curr.finalPrice * curr.cartCounter,
    0
  );

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      sx={{
        zIndex: 100,
        bgcolor: "primary.light",
        position: { md: "static", xs: "sticky" },
        bottom: 2,
        top: 2,
        left: 0,
        my: 2,
        color: "background.paper",
        float: { xs: "none", md: "right" },
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: { xs: "left", md: "right" },
          mb: 2,
          "&>span": { fontWeight: 600 },
        }}
      >
        Итого: <span>{addSpacesToNumber(totalSum)} ₸</span>
      </Typography>
      <Button
        variant="contained"
        fullWidth={isSmallScreen}
        onClick={() => router.push("/checkout")}
      >
        Оформить заказ
      </Button>
    </Paper>
  );
};

export default Summary;
