import { formatPhoneNumberWithSpaces } from "@/shared/utils";
import { Email, Person, Phone } from "@mui/icons-material";
import { Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const BuyerInfo = ({ email, name, phone }) => {
  return (
    <Paper sx={{ p: 1 }}>
      <Typography variant="h5">Информация о покупателе</Typography>
      <Divider color="white" sx={{ my: 1 }} />
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Person />
        </Grid>
        <Grid item xs={11}>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Phone />
        </Grid>
        <Grid item xs={11}>
          <Typography>{formatPhoneNumberWithSpaces(phone)}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Email />
        </Grid>
        <Grid item xs={11}>
          <Typography>{email}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BuyerInfo;
