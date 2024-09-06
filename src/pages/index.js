import React from "react";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Главная страница - ProHockey</title>
        <meta name="description" content="Описание главной страницы" />
        <meta name="keywords" content="ключевые слова для главной страницы" />
        <meta property="og:title" content="Главная страница - Ваш сайт" />
        <meta property="og:description" content="Описание главной страницы" />
        <meta property="og:url" content="https://prohockey.kz/" />
      </Head>
      <Box sx={{py: 2}}>
        <Typography variant="h3">ProHockey</Typography>
      </Box>
    </>
  );
};

export default HomePage;
