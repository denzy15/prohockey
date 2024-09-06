import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import Link from "next/link";
import { addSpacesToNumber } from "@/shared/utils";
import { SERVER_URL } from "@/shared/constants";
import { useRouter } from "next/router";
import { ShoppingCart } from "@mui/icons-material";
import CartCounter from "@/components/CartCounter";
import { toast } from "react-toastify";
import { useCart } from "@/modules/cart";
import { areParametersEqual } from "../helpers/utils";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const { category } = router.query;

  const { cart, addToCart, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  const [currentProductState, setCurrentProductState] = useState(() => {
    let newProductParams = [...product.parameters];

    let extraPrice = 0;

    newProductParams = newProductParams.map((param) => {
      const value = param.values.find((parVal) => parVal.defaultValue);

      if (value.extraPrice) extraPrice += value.extraPrice;

      return {
        name: param.name,
        value,
        _id: param._id,
      };
    });

    return {
      ...product,
      parameters: newProductParams,
      cartCounter: 1,
      finalPrice: product.basePrice + extraPrice,
    };
  });

  useEffect(() => {
    setIsInCart(
      cart.some(
        (prod) =>
          prod._id === currentProductState._id &&
          areParametersEqual(currentProductState.parameters, prod.parameters)
      )
    );

    let totalPrice = product.basePrice;

    currentProductState.parameters.forEach((param) => {
      if (param.value.extraPrice) totalPrice += param.value.extraPrice;
    });

    setCurrentProductState({ ...currentProductState, finalPrice: totalPrice });
  }, [cart, currentProductState.parameters, cart, product._id]);

  const handleChangeCartCounter = (value) => {
    if (value === "remove") {
      if (currentProductState.cartCounter <= 1) {
        setCurrentProductState({ ...currentProductState, cartCounter: 1 });
        return;
      }

      setCurrentProductState((prev) => ({
        ...prev,
        cartCounter: --prev.cartCounter,
      }));

      return;
    }

    if (currentProductState.cartCounter >= 10) {
      setCurrentProductState({ ...currentProductState, cartCounter: 10 });
      toast.info(
        "Для оптовой покупки на выгодных условиях свяжитесь с нами по телефону"
      );
      return;
    }

    setCurrentProductState((prev) => ({
      ...prev,
      cartCounter: ++prev.cartCounter,
    }));
  };

  const handleAddToCart = () => {
    const productToAdd = JSON.parse(JSON.stringify(currentProductState));
    addToCart(productToAdd);
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    if (!isInCart) return;

    const cartItemIndex = cart.findIndex(
      (prod) =>
        prod._id === currentProductState._id &&
        areParametersEqual(currentProductState.parameters, prod.parameters)
    );

    removeFromCart(cartItemIndex);
  };

  const handleSelectParamValue = (paramId, parValId) => {
    const newParams = [...currentProductState.parameters];

    const selectedParamIndex = product.parameters.findIndex(
      (param) => param._id === paramId
    );

    const parVal = product.parameters[selectedParamIndex].values.find(
      (val) => val._id === parValId
    );

    if (!parVal) {
      return;
    }

    newParams[selectedParamIndex].value = parVal;

    setCurrentProductState((prev) => ({
      ...prev,
      parameters: newParams,
      photo: parVal.photo ? parVal.photo : currentProductState.photo,
    }));
  };

  return (
    <Paper
      sx={{
        bgcolor: "text.primary",
        color: "background.paper",
        transition: "0.1s",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "scale(1.001)",
        },
      }}
      elevation={5}
    >
      <Link
        href={`/products/${category}/${currentProductState.name}`}
        passHref
        style={{ flex: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: 240,
            }}
          >
            <img
              src={`${SERVER_URL}/${currentProductState.photo}`}
              alt={currentProductState.name}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              p: 1,
              textAlign: "center",
              justifySelf: "end",
            }}
          >
            <Typography gutterBottom variant="body2">
              {currentProductState.name}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {addSpacesToNumber(currentProductState.finalPrice)} ₸
            </Typography>
          </Box>
        </Box>
      </Link>
      <Box sx={{ p: 2, bgcolor: "background.paper" }}>
        {product.parameters.map((param, i) => (
          <FormControl
            key={param.name}
            fullWidth
            sx={{ mb: 2 }}
            variant="outlined"
          >
            <InputLabel>{param.name}</InputLabel>
            <Select
              value={currentProductState.parameters[i].value._id}
              onChange={(e) =>
                handleSelectParamValue(param._id, e.target.value)
              }
            >
              {param.values.map((parVal) => (
                <MenuItem key={parVal.value} value={parVal._id}>
                  {parVal.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
        <Box sx={{ mb: 2, textAlign: "center" }}>
          <CartCounter
            isInCart={isInCart}
            cartCounter={currentProductState.cartCounter}
            handleChangeCartCounter={handleChangeCartCounter}
          />
        </Box>

        {isInCart ? (
          <Button
            startIcon={<ShoppingCart />}
            fullWidth
            variant="outlined"
            color="error"
            onClick={handleRemoveFromCart}
          >
            Удалить из корзины
          </Button>
        ) : (
          <Button
            startIcon={<ShoppingCart />}
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
          >
            В корзину
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default ProductCard;
