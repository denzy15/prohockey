import {
  Category,
  Dashboard,
  Drafts,
  ExpandLess,
  ExpandMore,
  Inbox,
  Send,
  ShoppingCart,
  SportsHockey,
  StarBorder,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
