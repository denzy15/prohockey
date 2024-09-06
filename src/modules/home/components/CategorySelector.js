import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

const categories = [
  {
    title: "Клюшки",
    path: "/products/sticks",
    bg: "assets/hockey-stick.jpeg",
  },
  {
    title: "Защита",
    path: "/products/protection",
    bg: "assets/protection.jpeg",
  },
  {
    title: "Форма",
    path: "/products/uniform",
    bg: "assets/uniform.jpeg",
  },
  {
    title: "Шлемы",
    path: "/products/helmets",
    bg: "assets/helmet.jpeg",
  },
  {
    title: "Коньки",
    path: "/products/skates",
    bg: "assets/skates.jpeg",
  },
  {
    title: "Аксессуары",
    path: "/products/accessories",
    bg: "assets/accessories.jpeg",
  },
];

const CategorySelector = () => {
  return (
    <Box sx={{ mt: 6, mb: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 600,
          textTransform: "uppercase",
        }}
      >
        Поиск по категории
      </Typography>
      <Grid container>
        {categories.map((category) => (
          <Grid item key={category.title} xs={12} md={4}>
            <Link href={category.path} passHref>
              <Box
                sx={{
                  display: "block",
                  minHeight: "150px",
                  aspectRatio: "16/9",
                  background: `url(${category.bg}) center / cover no-repeat`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    top: 0,
                    left: 0,
                  },
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    p: 1,
                    color: "white",
                    borderRadius: "5px",
                    position: "relative",
                    zIndex: 3,
                  }}
                >
                  {category.title}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySelector;
