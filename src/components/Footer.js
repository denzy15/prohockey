import { socialLinks } from "@/shared/constants";
import { Instagram, Telegram, WhatsApp } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", color: "text.primary", py: 2 }}>
      <Container>
        <Stack
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
          justifyContent={"space-between"}
        >
          <Box>
            <Link href="/">
              <img
                style={{ width: "90px", height: "90px" }}
                src="/assets/logo.png"
                alt="Logo"
              />
            </Link>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Контакты
            </Typography>
            <Typography variant="body1">+7 (775) 205-34-41</Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mt: 1, justifyContent: "center" }}
            >
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "inherit" }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
            {/* <Typography
              variant="body2"
              component="a"
              href="mailto:prohockey@mail.ru"
            >
              prohockey@mail.ru
            </Typography> */}
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Адрес
            </Typography>
            <Typography variant="body2">г. Алматы, Казахстан</Typography>
            <Typography variant="body2">Проспект Абая, 216</Typography>
          </Box>
        </Stack>
        <Box sx={{ py: 1 }}>
          <Typography variant="subtitle1" textAlign={"center"}>
            &copy; {new Date().getFullYear()} ProHockey. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
