import React, { useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import PhoneNumberInput from "./PhoneNumberInput";
import { createOrder } from "../api/api";
import { useCart } from "@/modules/cart";

const CheckoutForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "+7",
    email: "",
  });

  const { cart, clearCart } = useCart();

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!orderData.name || !orderData.phone || !orderData.email) {
      toast.warn("Пожалуйста, заполните все поля.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(orderData.email)) {
      toast.warn("Неверный адрес электронной почты.");
      return;
    }

    if (orderData.phone.length !== 12) {
      toast.warn("Неверный номер телефона");
      return;
    }

    setIsSubmitting(true);

    try {
      await createOrder(orderData, cart);
      clearCart();
      router.push("/thank-you");
    } catch (error) {
      toast.error("Произошла ошибка при оформлении заказа.");
      setIsSubmitting(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      {isSubmitting ? (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Создание заказа...
          </Typography>
          <CircularProgress size={115} />
        </Box>
      ) : (
        <Paper sx={{ p: 2, bgcolor: "primary.light" }}>
          <Typography variant="h6" sx={{ color: "primary.dark" }}>
            Введите своим контактные данные, чтобы наш менеджер смог с вами
            связаться
          </Typography>
          <TextField
            label="Имя"
            name="name"
            fullWidth
            sx={{
              "& input": { color: "primary.dark" },
              "& fieldset": { borderColor: "#b1b1b1" },
            }}
            margin="normal"
            value={orderData.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <PhoneNumberInput
            value={orderData.phone}
            onChange={handleInputChange}
          />

          <TextField
            label="Email"
            name="email"
            sx={{
              "& input": { color: "primary.dark" },
              "& fieldset": { borderColor: "#b1b1b1" },
            }}
            autoComplete="off"
            fullWidth
            margin="normal"
            value={orderData.email}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Оформить заказ
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default CheckoutForm;
