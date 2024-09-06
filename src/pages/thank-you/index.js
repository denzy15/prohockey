import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";

const ThankYouPage = () => {
  const router = useRouter();

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Спасибо за ваш заказ!
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Наш менеджер свяжется с вами для расчета стоимости доставки и уточнения
        деталей заказа.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/")}
        sx={{ mt: 4 }}
      >
        Вернуться на главную страницу
      </Button>
    </Box>
  );
};

export default ThankYouPage;
