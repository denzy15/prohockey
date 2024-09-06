import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

const levels = [
  {
    title: "Новичок",
    path: "/novice",
    bg: "assets/novice.jpeg",
  },
  {
    title: "Любитель",
    path: "/amateur",
    bg: "assets/amateur.jpeg",
  },
  {
    title: "Профи",
    path: "/pro",
    bg: "assets/pro.png",
  },
];

const LevelSelector = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Поможем подобрать экипировку под ваш уровень игры
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Выберите ваш уровень
      </Typography>
      <Grid container spacing={2}>
        {levels.map((level) => (
          <Grid item key={level.title} xs={12} md={4}>
            <Link href={level.path} passHref>
              <Box
                sx={{
                  borderRadius: "5px",
                  display: "block",
                  minHeight: "150px",
                  aspectRatio: "16/9",
                  background: `url(${level.bg}) top / cover no-repeat`,
                  boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    p: 1,
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.7)",
                    borderRadius: "5px",
                  }}
                >
                  {level.title}
                </Typography>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LevelSelector;
