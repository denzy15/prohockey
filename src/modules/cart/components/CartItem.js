import CartCounter from "@/components/CartCounter";
import { SERVER_URL } from "@/shared/constants";
import { addSpacesToNumber } from "@/shared/utils";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../hooks/useCart";
import Link from "next/link";
import { createQueryParams } from "../helpers/utils";
import { Delete } from "@mui/icons-material";

const CartItem = ({ product, index }) => {
  const { removeFromCart, changeProductCounter } = useCart();

  const handleChangeCartCounter = (value) => {
    changeProductCounter(index, value);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(index);
  };

  const queryParams = createQueryParams(product.parameters);


  

  return (
    <Grid item xs={12} p={0}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: { xs: "stretch", md: "center" },
          bgcolor: "primary.light",
          p: 1,
          borderRadius: 1,
          gap: { xs: 2, md: 1 },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            gap: 1,
          }}
        >
          <Link
            href={`/products/${product.category.urlPath}/${product.name}${queryParams}`}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                width: { xs: 130, md: 100 },
                height: { xs: "auto", md: 100 },
                border: "1px solid black",
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <img
                src={product.photo}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Link>
          <Box>
            <Typography variant="h6" sx={{ fontSize: 18 }}>
              {product.name}
            </Typography>
            {product.parameters.map((param) => (
              <Typography variant="subtitle2" key={param._id}>
                {param.name}: {param.value.value}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <CartCounter
            cartCounter={product.cartCounter}
            handleChangeCartCounter={handleChangeCartCounter}
            order={1}
          />
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <Typography sx={{ fontWeight: 600 }}>
              {addSpacesToNumber(product.finalPrice * product.cartCounter)} ₸
            </Typography>
            <Typography variant="caption">
              {addSpacesToNumber(product.finalPrice)} ₸ * {product.cartCounter}
            </Typography>
          </Box>
          <IconButton
            sx={{ order: { xs: 0, md: 2 } }}
            onClick={() => handleRemoveFromCart(index)}
            color="secondary"
          >
            <Delete sx={{ color: "background.default" }} />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default CartItem;
