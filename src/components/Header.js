import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
  Stack,
} from "@mui/material";
import {
  ShoppingCart,
  Menu as MenuIcon,
  Close,
  SportsHockey,
  LocalShipping,
  ContactSupport,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCart } from "@/modules/cart";

const navItems = [
  { title: "Каталог", path: "/products", icon: SportsHockey },
  {
    title: "Доставка и оплата",
    path: "/delivery-payment",
    icon: LocalShipping,
  },
  { title: "Контакты", path: "/contacts", icon: ContactSupport },
];

const Header = () => {
  const router = useRouter();
  const { cart } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ left: 0, top: 0, width: "100%" }}>
      <Toolbar sx={{ zIndex: 10, justifyContent: "space-between" }}>
        <Link href="/" passHref>
          <img className="app-logo" src="/assets/logo.png" alt="Logo" />
        </Link>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {navItems.map((navItem) => (
            <Box
              key={navItem.title}
              sx={{
                position: "relative",
                display: "inline-block",
                mx: 2,
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bgcolor: "white",
                  transition: "0.3s",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
              onClick={() => router.push(`${navItem.path}`)}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ cursor: "pointer" }}
              >
                {navItem.title}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Link href="/cart" passHref>
            <Badge color="primary" badgeContent={cart.length}>
              <IconButton color="inherit">
                <ShoppingCart />
              </IconButton>
            </Badge>
          </Link>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: "100vw", position: "relative" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5" sx={{ p: 2 }}>
              ProHockey
            </Typography>
            <IconButton
              // sx={{ position: "absolute", right: 0, top: 1 }}
              onClick={toggleDrawer(false)}
            >
              <Close />
            </IconButton>
          </Stack>
          <Divider />
          <List>
            {navItems.map((navItem) => (
              <ListItem key={navItem.title}>
                <ListItemButton onClick={() => router.push(`${navItem.path}`)}>
                  <ListItemIcon>
                    <navItem.icon />
                  </ListItemIcon>
                  <ListItemText primary={navItem.title} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <ListItemButton onClick={() => router.push("/cart")}>
                <ListItemIcon>
                  <Badge color="primary" badgeContent={cart.length}>
                    <ShoppingCart />
                  </Badge>
                </ListItemIcon>
                <ListItemText primary="Корзина" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
