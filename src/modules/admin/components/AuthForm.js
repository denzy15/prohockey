import { Alert, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { loginAndGetToken } from "../api/api";
import { useRouter } from "next/router";

const initialData = {
  username: "",
  password: "",
};

const AuthForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAuth = async () => {
    if (!formData.password || !formData.username) {
      setError("Заполните все поля");
      return;
    }
    setError("");

    try {
      await loginAndGetToken(formData);
      router.push("/admin");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Paper sx={{ p: 3, my: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 3 }}>
        ProHockey авторизации
      </Typography>
      <TextField
        label="Логин"
        fullWidth
        name="username"
        value={formData.username}
        onChange={handleChange}
        autoComplete="off"
      />
      <TextField
        sx={{ my: 2 }}
        fullWidth
        label="Пароль"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
      />
      {!!error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {error}
        </Alert>
      )}
      <Button variant="contained" onClick={handleAuth}>
        Войти
      </Button>
    </Paper>
  );
};

export default AuthForm;
