import { Instagram, Phone, Store } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const ContactsPage = () => {
  return (
    <Box>
      <Typography variant="h4" marginTop={3}>
        ProHockey
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
        Магазин хоккейных аксессуаров и услуг
      </Typography>
      <Stack
        direction="row"
        spacing={3}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" marginBottom={1}>
            Адрес
          </Typography>
          <Stack direction="row" spacing={1}>
            <Store />
            <Box>
              <Typography variant="body1">г. Алматы, Казахстан</Typography>
              <Typography variant="body1">Проспект Абая, 216</Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6" marginBottom={1}>
            Контакты
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Phone />
            </Grid>
            <Grid item xs={11}>
              +7 (775) 205-34-41 (WhatsApp)
            </Grid>
            <Grid item xs={1}>
              <Instagram />
            </Grid>
            <Grid item xs={11}>
              @prohockeykz
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactsPage;
