import {
  Category,
  Dashboard,
  ShoppingCart,
  SportsHockey,
} from "@mui/icons-material";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const items = [
  {
    title: "Главная",
    path: "/admin",
    icon: <Dashboard />,
  },
  {
    title: "Товары",
    path: "/admin/products",
    icon: <SportsHockey />,
  },
  {
    title: "Категории товаров",
    path: "/admin/categories",
    icon: <Category />,
  },
  {
    title: "Заказы",
    path: "/admin/orders",
    icon: <ShoppingCart />,
  },
];

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <Paper sx={{ p: 1 }}>
      <Typography>ProHockey</Typography>
      <Typography>Админ панель</Typography>
      <Divider />

      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {items.map((item, i) => (
          <ListItemButton key={i} onClick={() => router.push(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};

export default AdminSidebar;
