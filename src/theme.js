import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#3e44e6",
      light: "#f2f2f2",
      dark: "#191919",
    },
    secondary: {
      main: "#96627c",
    },
    background: {
      default: "#565656",
      paper: "#0E1214",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#3e44e6",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#112D49",
          },
          "&.Mui-disabled": {
            backgroundColor: "#9fa0a1",
            color: "#ffffff",
          },
        },

        containedSecondary: {
          backgroundColor: "#0E1214",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#112D49",
          },
          "&.Mui-disabled": {
            backgroundColor: "#9fa0a1",
            color: "#ffffff",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: {
          color: "#0E1214",
          "&.Mui-disabled": {
            color: "#9fa0a1",
          },
        },
      },
    },
  },
});

export default theme;
