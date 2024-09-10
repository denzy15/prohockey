import { SERVER_URL } from "@/shared/constants";
import { addSpacesToNumber } from "@/shared/utils";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ParameterSelect from "../components/ParameterSelect";
import { ShoppingCart } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useCart } from "@/modules/cart";
import CartCounter from "../../../components/CartCounter";
import { areParametersEqual } from "../helpers/utils";
import { useRouter } from "next/router";

const ProductInfo = ({ product }) => {
  const { name, shortDescription, detailedDescription, parameters, _id } =
    product;

  const { cart, addToCart, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  const router = useRouter();
  const { query } = router;

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
    const updatedParameters = [...currentProductState.parameters];

    let newPhoto;

    parameters.forEach((param, i) => {
      if (query[param.name]) {
        const paramValue = param.values.find(
          (val) => val.value === query[param.name]
        );
        if (paramValue) {
          updatedParameters[i].value = paramValue;
          if (paramValue.photo) newPhoto = paramValue.photo;
        }
      }
    });

    setCurrentProductState((prev) => ({
      ...prev,
      parameters: updatedParameters,
      photo: newPhoto || prev.photo,
    }));
  }, [query]);

  useEffect(() => {
    setIsInCart(
      cart.some(
        (prod) =>
          prod._id === currentProductState._id &&
          areParametersEqual(currentProductState.parameters, prod.parameters)
      )
    );

    const totalPrice = currentProductState.parameters.reduce(
      (prev, curr) => curr.value.extraPrice || 0 + prev,
      currentProductState.basePrice
    );

    setCurrentProductState({ ...currentProductState, finalPrice: totalPrice });
  }, [cart, currentProductState.parameters, cart, _id]);

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

  const handleSelectParamValue = (paramId, parVal) => {
    const newParams = [...currentProductState.parameters];

    const selectedParamIndex = parameters.findIndex(
      (param) => param._id === paramId
    );

    newParams[selectedParamIndex].value = parVal;

    setCurrentProductState((prev) => ({
      ...prev,
      parameters: newParams,
      photo: parVal.photo ? parVal.photo : currentProductState.photo,
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

  return (
    <Box sx={{ my: 2 }}>
      <Stack sx={{ gap: 2, flexDirection: { md: "row", xs: "column" } }}>
        <Box sx={{ flex: "1 0 50%" }}>
          <img
            style={{ height: 500, width: "100%", objectFit: "contain" }}
            src={currentProductState.photo}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            {shortDescription}
          </Typography>
          <Typography variant="h6" sx={{ color: "primary.main" }}>
            {addSpacesToNumber(currentProductState.finalPrice)} ₸
          </Typography>
          {parameters.map((param, i) => (
            <ParameterSelect
              activeValue={currentProductState.parameters[i].value}
              handleSelect={handleSelectParamValue}
              param={param}
              key={param._id}
            />
          ))}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              my: 2,
            }}
          >
            <CartCounter
              handleChangeCartCounter={handleChangeCartCounter}
              isInCart={isInCart}
              cartCounter={currentProductState.cartCounter}
            />
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
        </Box>
      </Stack>
      <Box>
        <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
          Описание товара:
        </Typography>
        <Typography sx={{ whiteSpace: "pre-line" }}>
          {detailedDescription}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductInfo;
